import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  heroTitle: string = "Benvenuto al Ristorante Il Gambero Rosso";
  heroBtnText: string = "Our Menu";
  heroBtn2Text: string = "Book a Table";
}
