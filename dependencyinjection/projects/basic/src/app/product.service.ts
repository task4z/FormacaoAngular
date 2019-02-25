import { Injectable } from '@angular/core';

export class Product{
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public price: number
    ){}
}

@Injectable()
export class ProductService{

  getProduct(): Product {
    return new Product(0, 'IPhone xpto', 'coisas', 999.99);
  }
}
