import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product{
  id:number,
  description:string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  selectedProduct: Product;

  products: Product[] = [
    {id: 0, description: 'iPhone X'},
    {id: 1, description: 'Samsung 10'},
    {id: 2, description: 'Hawei Pro'},
  ];

  constructor(private router: Router){

  }

  onSelect(prod: Product){
    this.selectedProduct = prod;
    this.router.navigate(["/productDetail", prod.id]);

  }
}
