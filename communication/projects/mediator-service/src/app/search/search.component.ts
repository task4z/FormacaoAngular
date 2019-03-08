import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'search',
  template: `
    <input type="text" placeholder="Enter product" [formControl]="searchInput"/>&nbsp;
  `,
  styles: []
})
export class SearchComponent implements OnInit {

  searchInput:FormControl;

  constructor(private state: StateService) {
    this.searchInput = new FormControl('');
    this.searchInput.valueChanges.pipe(
      debounceTime(300)
    ).subscribe( val => this.state.searchCriteria = val);
   }

  ngOnInit() {
  }

}
