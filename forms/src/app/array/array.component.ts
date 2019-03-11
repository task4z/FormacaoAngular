import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'array',
  templateUrl: './array.component.html',
  styles: []
})
export class ArrayComponent implements OnInit {

  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      emails: new FormArray([
        new FormControl()
      ])
    });
  }

  onSubmit(){
    console.log(this.formModel);
  }

  addEmail(){
    const emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }

  ngOnInit() {
  }

}
