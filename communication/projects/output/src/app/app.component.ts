import { Component } from '@angular/core';
import { PriceQuote } from './price.quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  priceQuoter: PriceQuote;

  priceQuoteHandler(event: PriceQuote){
    this.priceQuoter = event;
  }
}
