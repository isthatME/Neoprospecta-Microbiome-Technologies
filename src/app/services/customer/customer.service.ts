import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../shared/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly URL = "http://private-92a969-processoseletivo1.apiary-mock.com/customers"
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URL)
  }
   updateCustomer(customer: Customer): Observable<Customer> {
     return this.http.put<Customer>(`${this.URL}/${customer.id}`, customer)
   }
}
