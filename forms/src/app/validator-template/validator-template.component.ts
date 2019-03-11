import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'validator-template',
  templateUrl: './validator-template.component.html',
  styles: []
})
export class ValidatorTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(val){
    console.log(val);
  }
}
