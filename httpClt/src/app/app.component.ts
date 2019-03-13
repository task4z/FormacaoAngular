import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

interface Product{
  id:string,
  title:string,
  price:Number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  products$: Observable<Product[]>;

  constructor(private client: HttpClient ){
    let httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'xpto 12345');

    let httpParams = new HttpParams()
    .set('title', 'cenas');

    this.products$ = this.client.get<Product[]>('/data/products.json', {headers: httpHeaders, params: httpParams});
  }
}
