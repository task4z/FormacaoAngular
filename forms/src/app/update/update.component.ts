import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styles: []
})
export class UpdateComponent implements OnInit {

  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      id: new FormControl(),
      description: new FormControl(),
      seller: new FormControl(),
    })
  }

  updateEntireForm(){
    this.formModel.setValue({
      id: 123,
      description: 'coisas',
      seller:'loja de cenas'
    })
  }

  updatePartForm(){
    this.formModel.patchValue({
      description:'coisas alteradas'
    })
  }

  resetForm(){
    this.formModel.reset();
  }

  ngOnInit() {
  }

}
