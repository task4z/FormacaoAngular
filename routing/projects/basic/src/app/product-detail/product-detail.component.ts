import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  template: `
  <h4 class='product'>PRODUCT DETAIL COMPONENT</h4>
`,
styles: ['.product{background:yellow;}']
  ,
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
