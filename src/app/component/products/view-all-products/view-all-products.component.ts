import { CartService } from './../../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../service/products.service";

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  productList: any;

  constructor(private productService:ProductsService,private cartService:CartService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.productList = data['products'];
    });
  }

  addtocart(item: any){
    this.cartService.addToCart(item);
  }


  }
