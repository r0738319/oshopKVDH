import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy{

  products:Product[]=[];
  filteredProducts!: Product[]|undefined;
  category:string | null | undefined;
  cart: any;
  subscription: Subscription | undefined;
  constructor(productService: ProductService,
    route: ActivatedRoute, private shoppingCartService: ShoppingCartService) {

    productService
    .getAll()
    .switchMap(products=>{
      this.products=products;
      return route.queryParamMap;
    })
      .subscribe(params=>{
        this.category = params.get('category');
  
        this.filteredProducts=(this.category)?
        this.products?.filter(p=>p.category==this.category):
        this.products;
      });


   }

 async ngOnInit() {
  this.subscription=(await this.shoppingCartService.getCart())
  .subscribe((cart: any)=>this.cart=cart);

 }
 ngOnDestroy() {
     this.subscription?.unsubscribe();
 }

}
