import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomerModule } from 'src/app/shared/modules/customer/customer.module';

import { CustomerTableListComponent } from './customer-table-list.component';

describe('CustomerTableListComponent', () => {
  let component: CustomerTableListComponent;
  let fixture: ComponentFixture<CustomerTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CustomerModule, MatSnackBarModule],
      declarations: [CustomerTableListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
