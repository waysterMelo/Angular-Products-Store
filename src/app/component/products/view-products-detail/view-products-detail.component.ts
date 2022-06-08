import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../service/products.service";
import {CartService} from "../../../service/cart.service";

@Component({
  selector: 'app-view-products-detail',
  templateUrl: './view-products-detail.component.html',
  styleUrls: ['./view-products-detail.component.css']
})
export class ViewProductsDetailComponent implements OnInit {

  productId = 0;
  productData: any;
  related:any;
  listCart:any;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data['id'];
    });

    this.productService.getSingleProductDetail(this.productId).subscribe(viewData => {
      this.productData = viewData;
    })

    this.productService.viewRelatedProducts().subscribe(viewData => {
      this.related = viewData['products'];
    })

    this.productService.getAllProducts().subscribe(res => {
      this.listCart = res['products'] ;
      this.listCart.forEach((a:any) => {
        Object.assign(  a, {quantity:1, total: a.price})
      });
    })
  }
  handleAddToCart(item:any){
    this.cartService.addToCart(item);
  }

}
