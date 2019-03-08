import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'order',
  template: `
    <span *ngIf="stockSymbol">
      Buying {{quantity}} shares of {{stockSymbol}}
    </span>
  `,
  styles: [':host{backgound:cyan}']
})
export class OrderComponent implements OnInit {
  private _stockSymbol:string;

  @Input() set stockSymbol(value:string){
    if(value !== 'undefined'){
      this._stockSymbol=value;
      console.log(`cenas fixes ${value}`);
    }
  };

  @Input() quantity: number;

  get stockSymbol():string{
    return this._stockSymbol;
  }

  constructor() { }

  ngOnInit() {
  }

}
