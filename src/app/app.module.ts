import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllProductsComponent } from './component/products/view-all-products/view-all-products.component';
import { ViewProductsByCategoryComponent } from './component/products/view-products-by-category/view-products-by-category.component';
import { ViewProductsDetailComponent } from './component/products/view-products-detail/view-products-detail.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { CartComponent } from './component/products/cart/cart.component';
import { NavbarComponent } from './component/layout/navbar/navbar.component';
import { FirstPageComponent } from './component/layout/first-page/first-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './component/layout/contact/contact.component';
import { SideBarComponent } from './component/layout/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewAllProductsComponent,
    ViewProductsByCategoryComponent,
    ViewProductsDetailComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    NavbarComponent,
    FirstPageComponent,
    ContactComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
