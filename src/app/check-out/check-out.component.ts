import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit { 
  cart$!: Observable<ShoppingCart>;


  
 constructor(private shoppingCartService: ShoppingCartService){

 }

 async ngOnInit(){
      this.cart$= await this.shoppingCartService.getCart();
}  


 
}
