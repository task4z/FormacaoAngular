import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@Input() article: Article;

  constructor() {
    this.article = new Article('asdasd', 'asdasd', 5);
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
