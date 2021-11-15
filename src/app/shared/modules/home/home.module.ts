import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AvatarModule } from 'ngx-avatar';
import { CustomerTableListComponent } from 'src/app/components/customer/customer-table-list/customer-table-list.component';
import { HomeComponent } from 'src/app/home/home.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MaterialModule } from '../material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [CustomerTableListComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule,
    MaterialModule,
    AvatarModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class HomeModule { }
