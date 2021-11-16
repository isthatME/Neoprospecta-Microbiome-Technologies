import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Customer } from 'src/app/shared/models/customer';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule,],
      providers: [CustomerService]
    });
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve customers from the API', () => {
    const dummyCustomers: Customer[] = [
      { id: 1, name: "Guilherme", city: "Fortaleza", age: 24 },
      { id: 2, name: "Luiz", city: "Santa Catarina", age: 28 }
    ]

    service.getCustomers().subscribe(customer => {
      expect(customer.length).toBe(2);
      expect(customer).toEqual(dummyCustomers)
    })

  })

});
