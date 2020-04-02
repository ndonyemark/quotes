import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotez } from '../quotez'

@Component({
  selector: 'app-quote-forms',
  templateUrl: './quote-forms.component.html',
  styleUrls: ['./quote-forms.component.css']
})
export class QuoteFormsComponent implements OnInit {

  newQuote = new Quotez(0, '', '', '', new Date() , 0, 0);

  @Output() addQuote = new EventEmitter<Quotez>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
