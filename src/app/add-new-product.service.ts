import { Injectable } from '@angular/core';
import { products } from './products';

@Injectable()
export class AddNewProductService {

  products;
  constructor() {
    this.products = products;
   }

  addToProduct(product){
    console.log(typeof(products));
    products.push(product);

  }
  

}