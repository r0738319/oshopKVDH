import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{

  products:Product[]=[];
  filteredProducts!: Product[]|undefined;
  category:string | null | undefined;

  constructor(productService: ProductService,
    route: ActivatedRoute) {
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

 

}
