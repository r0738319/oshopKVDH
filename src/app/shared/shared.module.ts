import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular5-data-table';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';

import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';
import { CategoryService } from '../category.service';
import { OrderService } from '../order.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductQuantityComponent } from '../product-quantity/product-quantity.component';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { UserService } from '../user.service';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule
  ],
  exports:[
    ProductCardComponent,
    ProductQuantityComponent,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule,
    CommonModule,

  ],
  providers:[
    AuthService,AuthGuard, UserService, CategoryService, ProductService, ShoppingCartService, OrderService
  ]
})
export class SharedModule { }
