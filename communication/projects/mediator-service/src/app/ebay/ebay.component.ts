import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ebay',
  template: `
    <div class="ebay">
    <h2>Ebay Component</h2>
    search criteria: {{searchFor$ | async}}
    </div>
  `,
  styles: ['.ebay{background:cyan;}']
})
export class EbayComponent implements OnInit {
searchFor$: Observable<string>;
  constructor(private state: StateService) {
    this.searchFor$ = state.getState();
   }

  ngOnInit() {
  }

}
