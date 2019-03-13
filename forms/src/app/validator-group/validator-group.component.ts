import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ssValidator } from '../validator';
import { ssnValidator, equalValidator } from '../validatorsLib';

@Component({
  selector: 'validator-group',
  templateUrl: './validator-group.component.html',
  styles: []
})
export class ValidatorGroupComponent implements OnInit {

  formModel: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formModel = fb.group({
      username:['', Validators.required],
      ss:['',ssnValidator],
      passwords: fb.group({
        password:['',Validators.minLength(5)],
        pconfirm:['']
      }, {validator: equalValidator})
    });
  }

  ngOnInit() {
  }

}
