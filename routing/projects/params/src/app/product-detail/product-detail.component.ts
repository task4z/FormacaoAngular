import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
  <h4 class='product'>PRODUCT DETAIL COMPONENT</h4>
  <h3 class='product' *ngIf="productId">Com ID: {{productId}}</h3>
  <h3 class='product' *ngIf="productCategory">Com categoria: {{productCategory}}</h3>
`,
styles: ['.product{background:yellow;}']
  ,
})
export class ProductDetailComponent implements OnInit {

  productId: string;
  productCategory: string;

  constructor(private route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
    //this.productId = route.params.getValue().id;
    this.productId = route.snapshot.params['id'];
    //route.paramMap.subscribe(params => this.productId = params.get('id'));
    this.productCategory = route.snapshot.queryParamMap.get('category');
  }

  ngOnInit() {
  }

}
