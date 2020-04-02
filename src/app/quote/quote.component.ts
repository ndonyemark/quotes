import { Component, OnInit } from '@angular/core';
import { Quotez } from '../quotez'
import { from } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quotez[] = [];

  deleteQuote(isReady, index) {
    if (isReady) {
      let toDelete: boolean = confirm(`Are you sure you want to delete this quote?`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
