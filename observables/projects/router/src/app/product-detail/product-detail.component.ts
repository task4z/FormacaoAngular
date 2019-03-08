import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <h1>
      product-detail works!
    </h1>
    <h2>
    Details for Product ID : {{productId}}
    </h2>
  `,
  styles: []
})
export class ProductDetailComponent implements OnInit {

  productId: string;
  constructor( private route: ActivatedRoute) {
    route.paramMap.subscribe(params => this.productId = params.get('id'));
  }

  ngOnInit() {
  }

}
