import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  products:Product[]=[];
  filteredProducts!: Product[]|undefined;
  category:string | null | undefined;
  cart$: Observable<ShoppingCart> | undefined;
  constructor(private productService: ProductService,
    private route: ActivatedRoute, private shoppingCartService: ShoppingCartService) {
   }

 async ngOnInit() {
  this.cart$=await this.shoppingCartService.getCart();
  this.populateProducts();
 }

 private populateProducts(){
  this.productService
    .getAll()
    .switchMap(products=>{
      this.products=products;
      return this.route.queryParamMap;
    })
      .subscribe(params=>{
        this.category = params.get('category');
        this.applyFilter();
      });
 }
 

 private applyFilter(){
  this.filteredProducts=(this.category)?
  this.products?.filter(p=>p.category==this.category):
  this.products;
 }

}
