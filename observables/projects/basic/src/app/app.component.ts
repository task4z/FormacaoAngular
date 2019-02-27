import { Component, OnInit } from '@angular/core';
import { Observable, of, interval, from } from 'rxjs';
import { take, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  beers = [{
    name: 'super bock',
    price: 1
  },
  {
    name: 'sagres',
    price: 1.1
  },
  {
    name: 'tagus',
    price: 0.5
  },
  {
    name: 'guiness',
    price: 2
  },
  {
    name: 'carlsberg',
    price: 1.5
  },
  {
    name: 'heineken',
    price: 1.7
  }
];

  constructor(){
    from(this.beers).pipe(
      filter(beer => beer.price < 1.5),
      map(beer => `cerveja: ${beer.name} preço: ${beer.price}`)
    ).subscribe(
      beer => console.log(beer),
      err => console.log(err),
      () => console.log('Fim')
      );
    // of(1, 2, 3).subscribe(
    //   arg => console.log(arg),
    //   err => console.log(err),
    //   () => console.log('Fim')
    //   );

    // interval(1000).pipe(
    //   take(5)
    // ).subscribe(
    //   val => console.log(val),
    //   err => console.log(err),
    //   () => console.log('Fim')
    //   );
  }

  ngOnInit(){

  }
}
