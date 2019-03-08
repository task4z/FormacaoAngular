import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product{
  id: number,
  title: string,
  price: number,
}

@Injectable({providedIn: 'root'})
export class ProductService{
  products: Product[] = [
    {id:0, title:'Producto 1 ', price:24.99},
    {id:1, title:'Producto 2 ', price:34.99},
    {id:2, title:'Producto 3 ', price:44.99},
  ]

  getProducts():Observable<Product[]>{
    return of(this.products);
  }
}
