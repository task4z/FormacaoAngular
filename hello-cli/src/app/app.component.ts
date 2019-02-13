import { Component } from '@angular/core';
import { TesteServiceService } from './teste-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coisas xpto';

  constructor(private teste: TesteServiceService) {
    this.title = teste.nome;
  }
}
