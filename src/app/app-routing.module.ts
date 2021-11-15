import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'home',
    loadChildren: () => import('./shared/modules/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./shared/modules/customer/customer.module')
      .then(m => m.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
