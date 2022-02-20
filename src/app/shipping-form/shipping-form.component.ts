import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';
import { ShoppingCart } from '../models/shopping-cart';
import { OrderService } from '../order.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit, OnDestroy{
  @Input('cart')
  cart!: ShoppingCart;
  shipping: any; 
  userSubscription!: Subscription;
  userId!: string|any;
  constructor(private authService: AuthService, private shoppingCartService: ShoppingCartService, private orderService: OrderService, private router:Router){}

  ngOnInit(){
    this.userSubscription=this.authService.user$.subscribe(user=>this.userId=user?.uid);

  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
}
  async placeOrder() {
    let order= new Order(this.userId, this.shipping, this.cart);
    let result= await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success',result.key]);
  }

}

 

 

