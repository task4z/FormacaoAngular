import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'child',
  template: `
  <h3>Child Component {{name}}</h3>
    <p>
      child works!
    </p>
  `,
  styles: []
})
export class ChildComponent implements OnInit {
@Input() name:string;

dizerOla(){
  console.log(`Ola ${this.name} da componente filho`);
}
  constructor() { }

  ngOnInit() {
  }

}
