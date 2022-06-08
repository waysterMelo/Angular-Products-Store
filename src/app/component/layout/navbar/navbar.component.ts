import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../service/cart.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartItens = 0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProductData().subscribe(res => {
      this.cartItens = res.length;
    })
  }

}
