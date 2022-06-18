import { Component, OnInit } from '@angular/core';
import { meals } from '../meals';
import { IMeals } from '../IMeals';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  meals:IMeals[] = meals;//empty array

  constructor(private cartService: CartService) { }

  addToCart(meal:IMeals){
    window.alert('Your meal has been added to the cart!');//optional
    this.cartService.addToCart(meal);
  }  ngOnInit(): void {
  }

}
