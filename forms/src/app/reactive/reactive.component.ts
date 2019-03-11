import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'reactive',
  templateUrl: './reactive.component.html',
  styles: []
})
export class ReactiveComponent implements OnInit {

  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      username : new FormControl(),
      ss : new FormControl(),
      passwords : new FormGroup({
        password : new FormControl(),
        pconfirm : new FormControl(),
    })
  });
}

onSubmit(){
  console.log(this.formModel.value);
}

  ngOnInit() {
  }

}
