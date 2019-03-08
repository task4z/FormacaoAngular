import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Stock } from '../istock';

@Component({
  selector: 'order',
  template: `
    {{message}}
  `,
  styles: [':host{background:red}']
})
export class OrderComponent implements OnInit {

@Input() set stock( value: Stock ) {
  if( value && value.bidPrice ) {
    this.message = `Placed order to buy ${value.bidPrice.toFixed(2)} of ${value.stockSymbol}`;
  }
};
message: string = 'Waiting for order';

  constructor() {

   }

  ngOnInit() {
  }

}
