import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-driven',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formVal) {
    console.log(formVal);
  }
}
