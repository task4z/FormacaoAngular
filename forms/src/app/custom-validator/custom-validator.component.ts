import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ssValidator } from '../validator';

@Component({
  selector: 'custom-validator',
  templateUrl: './custom-validator.component.html',
  styles: []
})
export class CustomValidatorComponent implements OnInit {
  formModel: FormGroup;

  constructor() {//terceiro parametro validator assincrono(chamadas a servidor)
    this.formModel = new FormGroup({
      fcnss: new FormControl('',ssValidator)
    });
   }

  ngOnInit() {
  }

  onSubmit(val){
    console.log(val);
  }
}
