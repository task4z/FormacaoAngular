import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Stock } from '../istock';
import { interval } from 'rxjs';

@Component({
  selector: 'price-quoter',
  template: `
    <strong>
    <button (click)="buyStocks()">buy</button>
    {{stockSymbol}} : {{lastPrice | currency: 'EUR'}}
    </strong>
  `,
  styles: [':host{background:pink;padding:10px}']
})
export class PriceQuoterComponent implements OnInit {
  @Output() buy: EventEmitter<Stock> = new EventEmitter();

  stockSymbol: string = 'HIQ';
  lastPrice: number;

  constructor() {
    interval(2000).subscribe( data => this.lastPrice = Math.random()*100);
  }

  buyStocks(){
    let stockToBuy: Stock = {
      stockSymbol: this.stockSymbol,
      bidPrice: this.lastPrice,
    }
    this.buy.emit(stockToBuy);
  }
  ngOnInit() {
  }

}
