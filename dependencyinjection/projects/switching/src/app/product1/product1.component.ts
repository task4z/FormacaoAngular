import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product1',
  template: `
  <p>product 1: {{product.name}}
  </p>
`,
  styles: [],
})
export class Product1Component implements OnInit {
  product:Product;
  constructor(private productService: ProductService) {
    this.product = productService.getProduct();
   }

  ngOnInit() {
  }

}
