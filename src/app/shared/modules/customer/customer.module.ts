import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AvatarModule } from 'ngx-avatar';
import { CustomerEditComponent } from 'src/app/components/customer/customer-edit/customer-edit.component';

import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [CustomerEditComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    AvatarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
