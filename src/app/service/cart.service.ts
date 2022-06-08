import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartDataList:any = [];
  productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProductData(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartDataList.push(...product);
    this.productList.next(product);
  }

  addToCart(product:any){
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this.getTotalPrice();
    console.log(this.cartDataList)
    console.log(this.getTotalPrice())
  }

  getTotalPrice(): number{
    let grandTotal = 0;
    this.cartDataList.map((a:any) => {
      grandTotal += a.price;
    });
    return grandTotal;
  }

  removeCartItem(product:any){
    this.cartDataList.map((a:any, index:any) => {
      if (product.id === a.id) {
        this.cartDataList.splice(index, 1)
      }
    })

    this.productList.next(this.cartDataList);
  }

}
