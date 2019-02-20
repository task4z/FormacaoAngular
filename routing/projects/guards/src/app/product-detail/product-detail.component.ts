import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  template: `
  <h4 class='product'>PRODUCT DETAIL COMPONENT</h4>
  <input type='text' placeholder="Insia coisas" [formControl]='name'/>
`,
styles: ['.product{background:yellow;}']
  ,
})
export class ProductDetailComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
