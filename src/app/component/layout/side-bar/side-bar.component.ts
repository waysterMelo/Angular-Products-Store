
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private productService:ProductsService) {  }

  categoryList: any = [];

  ngOnInit(): void {
    this.productService.getCategory().subscribe(data => {
      this.categoryList = data;
    })
  }

}
