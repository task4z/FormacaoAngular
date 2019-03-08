import { Component } from '@angular/core';
import { Stock } from './istock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  receivedStock: Stock;

  handleBuy(e: Stock){
    this.receivedStock = e;
  }
}
