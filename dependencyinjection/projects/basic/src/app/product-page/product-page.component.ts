import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'product-page',
  template: `
    <div>
    <h2>{{product.id}}</h2>
    <h2>{{product.title}}</h2>
    <h2>{{product.description}}</h2>
    <h2>{{product.price}}</h2>
    </div>
  `,
  styles: [],
  providers: [ProductService],
})
export class ProductPageComponent implements OnInit {

  product: Product;

  constructor(private ps:ProductService) {
    this.product = ps.getProduct();
  }

  ngOnInit() {
  }

}
