import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotez } from '../quotez';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quotez;
  constructor() { }

  ngOnInit(): void {
  }

}
