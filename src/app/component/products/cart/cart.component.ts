import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any = [];
  allProducts: any = 0;
  grandTotal!: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProductData().subscribe(res => {
      this.products = res;
      this.allProducts = this.cartService.getTotalPrice();

    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }


}
