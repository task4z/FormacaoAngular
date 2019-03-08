import { Component, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('child1') child1:ChildComponent;
  @ViewChildren(ChildComponent) todos:QueryList<ChildComponent>;

  constructor(){}

  ngAfterViewInit(){
    this.child1.dizerOla();
  }

  chamarTodas(){
    this.todos.map(child=> child.dizerOla());
  }
}
