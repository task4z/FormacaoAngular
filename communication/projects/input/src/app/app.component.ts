import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stock: string;
  numberOfShares: number = 100;

  onChangeEvent( {target} ){
    this.stock = target.value;
  }
}
