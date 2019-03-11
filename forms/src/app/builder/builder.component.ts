import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'builder',
  templateUrl: './builder.component.html',
  styles: []
})
export class BuilderComponent implements OnInit {

  formModel: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formModel = fb.group({
      username: {value: '' , disabled: false},
      ss: [''],
      passwords: fb.group({
        password: [''],
        pconfirm: [''],
      })
    });
   }

   onSubmit(){
    console.log(this.formModel.value);
  }

  ngOnInit() {
  }

}
