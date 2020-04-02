import { Component, OnInit } from '@angular/core';
import { Quotez } from '../quotez';
import { from } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quotez[] = [
    new Quotez(1, 'code like a maniac as long as it solves and makes sense', 'misty', 'Mark', new Date(), 0, 0),
  ];

  deleteQuote(isReady, index) {
    if (isReady) {
      let toDelete: boolean = confirm(`Are you sure you want to delete this quote?`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
