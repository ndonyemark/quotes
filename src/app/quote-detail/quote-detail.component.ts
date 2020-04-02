import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotez } from '../quotez';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quotez;

  @Output() isReady = new EventEmitter<boolean>();

  delQuote(ready: boolean) {
    this.isReady.emit(ready);
  }

  upvote(){
    this.quote.likes += 1;
  }

  downvote(){
    this.quote.dislikes += 1;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
