import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { productServiceFactory } from '../product.factory';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-product2',
  template: `
    <p>product 2: {{product.name}}
    </p>
  `,
  styles: [],
  providers:[
    {provide: ProductService, useFactory: productServiceFactory, deps: ['IS_PROD_ENVIRONMENT']},
    //{provide: 'IS_PROD_ENVIRONMENT', useValue: false}
    {provide: 'IS_PROD_ENVIRONMENT', useValue: environment.production}
  ],
})
export class Product2Component implements OnInit {

  product: Product;

  constructor(private productService: ProductService) {
    this.product = productService.getProduct();
   }

  ngOnInit() {
  }

}
