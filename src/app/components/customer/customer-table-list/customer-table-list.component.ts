import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs/operators';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { NotifierService } from 'src/app/services/notifier/notifier.service';
import { ErrorHandleService } from 'src/app/services/utils/error-handle.service';
import { Customer } from 'src/app/shared/models/customer';


@Component({
  selector: 'app-customer-table-list',
  templateUrl: './customer-table-list.component.html',
  styleUrls: ['./customer-table-list.component.scss']
})
export class CustomerTableListComponent implements OnInit {

  customers: Customer[] = []
  customersData: MatTableDataSource<Customer> = new MatTableDataSource<Customer>();

  displayedColumns: string[] = ['id', 'name', 'age', 'city', 'edit'];
  dataSource = new MatTableDataSource();


  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  isCustomerLoading: boolean = true;
  constructor(private customeService: CustomerService,
    private notifierService: NotifierService,
    private errorHandleService: ErrorHandleService
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  // fill data source properties with all the provided customer
  fillTable(customers: Customer[]): void {
    this.customersData = new MatTableDataSource<Customer>(customers)
    this.customersData.sort = this.sort
    this.customersData.paginator = this.paginator
  }
  // get all customers 
  getCustomers(): void {
    this.customeService.getCustomers()
      // operator for auto unsubscribe
      .pipe(take(1))
      .subscribe((customers: Customer[]) => {
        this.customers = customers
        this.isCustomerLoading = false;
        this.fillTable(customers)
      }, error => {
        this.isCustomerLoading = false
        this.notifierService.showNotification(this.errorHandleService.handleError(error), 'Fechar', 'error')
      })
  }

  //filter customer 
  applyFilter(filteredValue: any): void {
    this.customersData.filter = filteredValue.value.trim().toLocaleLowerCase();
  }
}
