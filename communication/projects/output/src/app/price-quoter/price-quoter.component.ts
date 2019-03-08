import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PriceQuote } from '../price.quote';
import { interval } from 'rxjs';

@Component({
  selector: 'price-quoter',
  template: `
  <p>
    <strong>Inside Price-Quoter: {{priceQuote?.stockSymbol}} - {{priceQuote?.lastPrice}}
    </strong>
    </p>
  `,
  styles: []
})
export class PriceQuoterComponent implements OnInit {

  @Output() lastPrice = new EventEmitter<PriceQuote>();

  priceQuote: PriceQuote;

  constructor() {
    interval(1000).subscribe( data => {
      this.priceQuote = {
        stockSymbol: 'HIQ',
        lastPrice: 100 * Math.random(),
      }
      this.lastPrice.emit(this.priceQuote);
  });


  }

  ngOnInit() {
  }

}
