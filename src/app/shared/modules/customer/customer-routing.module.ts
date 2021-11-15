import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEditComponent } from 'src/app/components/customer/customer-edit/customer-edit.component';

const routes: Routes = [
  { path: 'customer/:id', component: CustomerEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
