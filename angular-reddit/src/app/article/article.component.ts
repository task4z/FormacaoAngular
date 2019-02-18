import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@Input() article: Article;
token: string;

  constructor() {
    this.article = new Article('asdasd', 'asdasd', 5);
    this.token = new Date().toISOString().slice(5).replace('-', '').replace(/T/g, '').replace(/:/g, '').replace('.', '').replace(/Z/g, '');
    const arr = [];

    while ( arr.length < 2) {
      const a = Math.floor(Math.random() * (this.token.length - 0) + 0);
      if ( !arr.includes(a) ) {
          arr.push(a);
          this.token = this.token.substr(0, a)
           + String.fromCharCode(this.token.charCodeAt(a) + Math.floor(Math.random() * (8 - 33) + 33))
           + this.token.substr(a + 1);
      }
    }

    while ( arr.length < 4) {
      const a = Math.floor(Math.random() * (this.token.length - 0) + 0);
      if ( !arr.includes(a) ) {
          arr.push(a);
          this.token = this.token.substr(0, a)
          + String.fromCharCode(this.token.charCodeAt(a) + Math.floor(Math.random() * (65 - 40) + 40))
          + this.token.substr(a + 1);
      }
    }
  }

  voteUp() {
    this.article.voteUp();
  }

  voteDown() {
    this.article.voteDown();
  }

  ngOnInit() {
  }

}
