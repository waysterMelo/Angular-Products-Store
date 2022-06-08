import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../service/products.service";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  productList: any;

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.viewSomeProjects().subscribe(data => {
      this.productList = data['products'];
    })
  }

}
