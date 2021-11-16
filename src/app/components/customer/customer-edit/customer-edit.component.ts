import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { NotifierService } from 'src/app/services/notifier/notifier.service';
import { ErrorHandleService } from 'src/app/services/utils/error-handle.service';
import { Customer } from 'src/app/shared/models/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer | undefined = undefined;
  customerId!: number;
  isCustomerLoading: boolean = true;

  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private errorHandleService: ErrorHandleService,
    private customeService: CustomerService,
    private fb: FormBuilder,
    private notifierService: NotifierService) { }

  ngOnInit(): void {
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getCustomer();
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      id: [null],
      name: [null, Validators.required],
      age: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      city: [null, Validators.required]
    })
  }

  patchForm(customer: Customer): void {
    this.form.patchValue(customer as Customer)
  }
  // filter current customer provided by `getCustomer` function, based on id retrived from url params
  filterDesiredCustomer(customers: Customer[], customerId: number): Customer | undefined {
    return customers.find((customer: Customer) => customer.id == customerId)
  }
  getCustomer(): void {
    this.customeService.getCustomers()
      .pipe(take(1))
      .subscribe((customers: Customer[]) => {
        this.customer = this.filterDesiredCustomer(customers, this.customerId);
        this.patchForm(this.customer as Customer);
        this.isCustomerLoading = false
      }, (error: any) => {
        this.isCustomerLoading = false
        this.notifierService.showNotification(this.errorHandleService.handleError(error), 'Fechar', 'error')
      })
  }

  updateCustomer(form: FormGroup): void {
    if (form.valid) {
      this.customeService.updateCustomer(form.value)
        .pipe(take(1))
        .subscribe((customer: Customer) => {
          this.notifierService.showNotification(`Cliente ${form.value.name} atualizado com sucesso`, 'Fechar', 'success')
          this.location.back();
        }, error => this.notifierService.showNotification(this.errorHandleService.handleError(error), 'Fechar', 'error'))
    }
  }

  cancelUpdateCustomerAction(): void {
    this.location.back();
  }
}
