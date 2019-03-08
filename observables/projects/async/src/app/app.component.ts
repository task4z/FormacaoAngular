import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { ProductService, Product } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers$:Observable<number> = interval(1000).pipe(take(10));
  numbers: number;
  products$ : Observable<Product[]>;

  constructor(ps: ProductService){
    interval(1000).pipe(take(10)).subscribe(val => this.numbers = val);
    this.products$ = ps.getProducts();
  }
}
