import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
  <h4 class='product'>PRODUCT DETAIL COMPONENT</h4>
  <h3 class='product'>Com ID: {{productId}}</h3>
`,
styles: ['.product{background:yellow;}']
  ,
})
export class ProductDetailComponent implements OnInit {

  productId: string;

  constructor(private route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
    //this.productId = route.params.getValue().id;
    //this.productId = route.snapshot.params['id'];
    route.paramMap.subscribe(params => this.productId = params.get('id'));
  }

  ngOnInit() {
  }

}
