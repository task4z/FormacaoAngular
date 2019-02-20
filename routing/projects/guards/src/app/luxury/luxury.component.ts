import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luxury',
  template: `
    <p class="luxuria">luxury mesmo impec</p>
  `,
  styles: ['luxuria{background-color:orange;}']
})
export class LuxuryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
