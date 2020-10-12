import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class CartService {

  items:Product[];

  constructor() { 
    this.items = [];
  }

  getItems():Product[]{
    return this.items;
  }

  addItem(product:Product){
    this.items.push(product);
  }

  clear():Product[]{
    this.items = [];
    return this.items;
  }

  getTotalPrice():number{
    let total = 0;
    for(let item of this.items){
      total = total + item.price;
    }
    return total;
  }

}