import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }


  getAllProducts(){
    const base_url ="https://dummyjson.com/products";
    return this.httpClient.get(base_url).pipe(map((res:any) => {return res}));
  }

  viewProduct(){
    const base_url ="https://dummyjson.com/products?limit=20";
    return this.httpClient.get(base_url).pipe(map((res:any) => {return res}));
  }

  getSingleProductDetail(productId:number){
    const base_url ="https://dummyjson.com/products/"+productId;
    return this.httpClient.get(base_url).pipe(map((res:any) => {return res}));
  }

  searchCategoryProduct(name:any){
    const base_url = "https://dummyjson.com/products/category/"+name;
    return this.httpClient.get(base_url).pipe(map((res:any) => {return res}));
  }

  getCategory(){
    const category_url = "https://dummyjson.com/products/categories";
    return this.httpClient.get(category_url);
  }


  viewSomeProjects(){
    const base_url ="https://dummyjson.com/products?limit=12";
    return this.httpClient.get(base_url).pipe(map((res:any) => {return res}));
  }

  //not implemented yet
  viewRelatedProducts(){
    const base_url ="https://dummyjson.com/products?limit=4&skip=10";
    return this.httpClient.get(base_url).pipe(map((res:any) => {return res}));
  }
}
