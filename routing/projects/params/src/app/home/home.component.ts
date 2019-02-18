import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h4 class='home'>HOME COMPONENT</h4>
  `,
  styles: ['.home{background:red;}']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
