import { Component, Input, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Product } from '../models/product';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent  {
  @Input('product')
  product!: Product;
  @Input('show-actions') showActions=true;
  @Input('shopping-cart') shoppingCart: ShoppingCart | undefined;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(){
    this.cartService.addToCart(this.product);
  }
}
