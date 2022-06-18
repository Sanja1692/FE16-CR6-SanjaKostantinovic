import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  heroTitle: string = "Benvenuto al Ristorante Il Gambero Rosso";
  heroText: string = "Delivering great food for more than 18 years!";
  heroBtnText: string = "Our Menu";
  heroBtn2Text: string = "Book a Table";
}
