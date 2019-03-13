import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'validator-reactive',
  templateUrl: './validator-reactive.component.html',
  styles: []
})
export class ValidatorReactiveComponent implements OnInit {

  formModel: FormGroup;

  constructor() {//terceiro parametro validator assincrono(chamadas a servidor)
    this.formModel = new FormGroup({
      phone: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[0-9]*')
      ])
    });
   }

  ngOnInit() {
  }

  onSubmit(val){
    console.log(val);
  }
}
