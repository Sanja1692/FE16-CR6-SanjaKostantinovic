import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'; //FormControl, FormGroup
import { CartService } from '../cart.service';
import { IMeals } from '../IMeals';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  amount: number = 0; // from beginning 0
  service: number = 0;
  discount: number = 0;
  totalPrice: number = 0;
  items: IMeals[] = [];
  checkoutForm = this.FB.group({ //form input
    name: '',
    address: '',
  });

constructor(private cartService: CartService, private FB: FormBuilder) { }

clearCart() {
  window.alert('Your cart has been cleared'); //optional
  this.items = this.cartService.clearCart();
}
// to take the values from the form you can select the property that have the formGroup and then just add .value
onSubmit() {
  if(this.checkoutForm.valid) {
    var sum = this.checkoutForm.value;
    // console.log(sum)
    // console.warn('Order has been submitted', this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.summary()
  }
}

summary(){
  for(let val of this.items) {
    this.amount = this.amount + val.price
    this.service = this.amount * 0.10;
    this.totalPrice = this.amount + this.service;
  }
  if(this.totalPrice >= 40) {
    this.discount = this.totalPrice * 0.15;
  }
  this.totalPrice = this.amount + this.service - this.discount;
}

ngOnInit(): void {
  this.items = this.cartService.getItems();
  this.summary()
  console.log(this.totalPrice)
}
}
// Display the total of the Bill with a “Service” section that shows 10% of the total amount. 
// If the Total sum is more than EUR 40, the user gets a 15% discount. The total without discount and the new price with the discount must be neatly shown on the screen. 