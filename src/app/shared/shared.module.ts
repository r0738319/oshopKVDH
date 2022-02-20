import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
    CommonModule
  ],
  exports:[
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  providers:[
    AuthService,AuthGuard, UserService, CategoryService, ProductService, ShoppingCartService, OrderService
  ]
})
export class SharedModule { }
