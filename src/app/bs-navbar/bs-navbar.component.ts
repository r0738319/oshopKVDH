import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit{
appUser!: AppUser;
cart$: Observable<ShoppingCart> | undefined;

  constructor(private auth: AuthService, private shoppingCardService: ShoppingCartService) {}

  logout(){
    this.auth.logout();
  }
async ngOnInit() {
  this.auth.appUser$.subscribe(appUser=>this.appUser=appUser);
  this.cart$= await this.shoppingCardService.getCart();
  
}
}
