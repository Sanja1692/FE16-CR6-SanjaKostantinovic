import { Injectable } from '@angular/core';
import { IMeals } from './IMeals';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IMeals [] = [];

  constructor() { }

  addToCart(meal: IMeals) {
    this.items.push(meal);
  }

  getItems(){ // print the items
    return this.items;
  }

  clearCart(){
    this.items = [];//overwrite with empty array
    return this.items;
  }
}
