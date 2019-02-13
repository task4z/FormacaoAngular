import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  votes:number;
  title:string;
  link:string;

  constructor() {
    this.votes = 10;
    this.title = 'angular Cenas';
    this.link = 'http://cenas.com';
  }

  voteUp(){
    this.votes++;
  }

  voteDown(){
    this.votes--;
  }

  ngOnInit() {
  }

}
