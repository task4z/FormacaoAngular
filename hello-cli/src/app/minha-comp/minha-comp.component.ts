import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { TesteServiceService } from '../teste-service.service';

@Component({
  selector: 'app-minha-comp',
  templateUrl: './minha-comp.component.html',
  styleUrls: ['./minha-comp.component.css']
})
export class MinhaCompComponent implements OnInit {

  cenas: string;

  constructor(servico: TesteServiceService ) {
    this.cenas = servico.nome;
  }

  ngOnInit() {
  }

}
