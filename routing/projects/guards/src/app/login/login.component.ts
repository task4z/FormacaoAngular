import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <h4 class="login">LOGIN COMPONENT</h4>
  `,
  styles: ['.login{background:lightgreen}']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
