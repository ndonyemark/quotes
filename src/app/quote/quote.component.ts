import { Component, OnInit } from '@angular/core';
import { Quotez } from '../quotez'
import { from } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
