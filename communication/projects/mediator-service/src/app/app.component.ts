import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    console.log('init...........');
    console.log('---------------');
    let random1 = Observable.create(observer => observer.next(Math.random()));
    let observer1 = random1.subscribe(arg => console.log(`Observer1: ${arg}`));
    let observer2 = random1.subscribe(arg => console.log(`Observer2: ${arg}`));
    console.log('---------------');
    let random2 = new BehaviorSubject(0);
    random2.next(Math.random());
    let observerBehaviorSubject1 = random2.subscribe(arg => console.log(`ObserverBehaviorSubject1: ${arg}`));
    let observerBehaviorSubject2 = random2.subscribe(arg => console.log(`ObserverBehaviorSubject2: ${arg}`));
    //subject so emite quando tem nova subscrição
    //behavior subject emite o ultimo valor apos subscricao so
    console.log('---------------');
    let random3 = new Subject();
    random3.next('b');
    let observerSubject2 = random3.subscribe(arg => console.log(`ObserverSubject1: ${arg}`));
    random3.next('c');
    console.log('---------------');
    let random4 = new BehaviorSubject('a');
    random4.next('b');
    let observerBehaviorSubject3 = random4.subscribe(arg => console.log(`ObserverBehaviorSubject3: ${arg}`));
  }
}
