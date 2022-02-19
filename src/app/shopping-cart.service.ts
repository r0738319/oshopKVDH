import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Product } from './models/product';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { take } from 'rxjs/operators';
import { ShoppingCart } from './models/shopping-cart';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase) { }

  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<Observable<ShoppingCart>>{
    let cartId= await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/'+ cartId)
    .valueChanges().map((x:any)=>new ShoppingCart(x.items));
  }
  
  private async getOrCreateCartId(){
    let cartId= localStorage.getItem('cartId');
    if(cartId) return cartId;
    
      let result= await this.create();
      if (result.key!==null)
      localStorage.setItem('cartId',result.key);
      if (result.key!==null)
      return result.key;
      return cartId;
  }



async addToCart(product: Product) {
 this.updateItemQuantity(product,1)
}
async removeFromCart(product: Product){
  this.updateItemQuantity(product,-1)
}
private async updateItemQuantity(product:Product, change:number){
  const cartId = await this.getOrCreateCartId();
  const item = this.db.object('/shopping-carts/' + cartId + '/items/' + product.key);
  item.snapshotChanges().pipe(take(1)).subscribe((i: any) => {
    if (i.payload.val()) {
      item.update({ product:product, quantity: i.payload.val().quantity + change });
    } else {
      item.set({ product:product, quantity: 1 });        
    }
  }); 
}
}


