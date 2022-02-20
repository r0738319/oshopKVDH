import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular5-data-table';

import { AdminAuthGuard } from '../admin-auth-guard.service';
import { AuthGuard } from '../auth-guard.service';
import { SharedModule } from '../shared/shared.module';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductFormComponent } from './product-form/product-form.component';



@NgModule({
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path:'admin/products/new',component:ProductFormComponent ,canActivate:[AuthGuard, AdminAuthGuard]},
      {path:'admin/products/:id',component:ProductFormComponent ,canActivate:[AuthGuard, AdminAuthGuard]},
      {path:'admin/products',component:AdminProductsComponent ,canActivate:[AuthGuard, AdminAuthGuard]},
      {path:'admin/orders',component:AdminOrdersComponent ,canActivate:[AuthGuard,AdminAuthGuard]},
    ])
  ],
  providers:[
    AdminAuthGuard
  ]
})
export class AdminModule { }
