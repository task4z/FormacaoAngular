import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  private baseWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private urlSuffix = '&units=metric&appid=f78fb4c7fe94d411d8a24639b4f69366';

  searchCity = new FormControl();
  weather:string = '';

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.searchCity.valueChanges.pipe(
      switchMap(city => this.getWeather(city))
    ).subscribe(
      res => this.weather = `Temperatura atual: ${res['main'].temp} - Humidade atual: ${res['main'].humidity}`,
      err => console.log(`erro em cenas: ${err}`)
    );
  }

  getWeather(city: string): Observable<any>{

    return this.http.get(`${this.baseWeatherUrl}${city}${this.urlSuffix}`).pipe(
        catchError(
          err =>
          {
            console.log('cidade não encontrada');
            return EMPTY;
          }
        )
      );
  }
}
