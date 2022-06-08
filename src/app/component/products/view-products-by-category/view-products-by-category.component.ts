import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../service/products.service";

@Component({
  selector: 'app-view-products-by-category',
  templateUrl: './view-products-by-category.component.html',
  styleUrls: ['./view-products-by-category.component.css']
})
export class ViewProductsByCategoryComponent implements OnInit {

  categoryName = "";
  productList: any = [];

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('name'));

    this.productService.searchCategoryProduct(productIdFromRoute).subscribe(data => {
      this.productList = data['products'];
      console.log(this.productList = data['products'])

    })
  }

}
