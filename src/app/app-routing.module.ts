import { ViewAllProductsComponent } from './component/products/view-all-products/view-all-products.component';
import { ViewProductsByCategoryComponent } from './component/products/view-products-by-category/view-products-by-category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from "./component/products/cart/cart.component";
import {FirstPageComponent} from "./component/layout/first-page/first-page.component";
import { ViewProductsDetailComponent } from './component/products/view-products-detail/view-products-detail.component';

const routes: Routes = [
  { path: '',  component: FirstPageComponent},
  { path: 'products',  component: ViewAllProductsComponent},
  { path: 'products/cart', component: CartComponent},
  { path: 'category/:name', component: ViewProductsByCategoryComponent},
  { path: 'view-product/:id', component: ViewProductsDetailComponent},
  { path: 'products/view-product/:id', component: ViewProductsDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
