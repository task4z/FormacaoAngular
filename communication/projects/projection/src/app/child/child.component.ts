import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <div class="main">
      <h2>ChildComponent</h2>
      <p>texto definido na child component</p>
      <div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: ['.main{background:yellow;}']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
