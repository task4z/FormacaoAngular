import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{

  // @ViewChild('stockSymbol') stockSymbol: ElementRef;
  stockSymbol = new FormControl();

  ngAfterViewInit(){

    this.stockSymbol.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(stock => this.getstockFromServer(stock));
    // let keyUp$ = fromEvent(this.stockSymbol.nativeElement, 'keyup');

    // let keyUpValues$ = keyUp$.pipe(
    //   debounceTime(300),
    //   map(event => event['target'].value)
    // ).subscribe(
    //   stock => this.getstockFromServer(stock),
    //   err => console.log('Erro'),
    //   () => console.log('Fim')
    // )

  }

  getstockFromServer(stock: string) {
    console.log(`O valor do título ${stock} é : ${(Math.random()*100).toFixed(3)} *100: ${stock*100}`);
  }
}
