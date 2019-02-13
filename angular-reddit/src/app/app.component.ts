import { Component, HostBinding } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@HostBinding('attr.class') cssClass = 'row';

  articles:Article[];

  constructor(){
    this.articles = [
      new Article('Angular', 'angular.io', 5),
      new Article('React', 'reactjs.org', 4),
      new Article('Vue', 'vuejs.org', 3)
    ];
  }

  sortedArticles():Article[]{
    return this.articles.sort((a:Article, b:Article) => b.votes - a.votes);
  }

    addArticle(title: HTMLInputElement, link: HTMLInputElement){
      //console.log(`Adding Article title: ${title.value}, link: ${link.value}`);
      this.articles.push(new Article(title.value, link.value));
      title.value = '';
      link.value = '';
      return false;
    }
}
