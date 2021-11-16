import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CustomerEditComponent } from './customer-edit.component';
import { Customer } from 'src/app/shared/models/customer';

describe('CustomerEditComponent', () => {
  let component: CustomerEditComponent;
  let fixture: ComponentFixture<CustomerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MatSnackBarModule],
      providers: [FormBuilder],
      declarations: [CustomerEditComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should retrieve the desired customer', () => {
    const dummyCustomers: Customer[] = [
      { id: 1, name: "Guilherme", city: "Fortaleza", age: 24 },
      { id: 2, name: "Luiz", city: "Santa Catarina", age: 28 }
    ]

    let desiredCustomer = fixture.componentInstance.filterDesiredCustomer(dummyCustomers, 2)
    
    expect(desiredCustomer).toBe(dummyCustomers[1])
  });
});
