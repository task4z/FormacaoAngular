import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'amazon',
  template: `
    <div class="amazon">
    <h2>Amazon Component</h2>
    search criteria: {{searchFor$ | async}}
    </div>
  `,
  styles: ['.amazon{background:red;}']
})
export class AmazonComponent implements OnInit {
searchFor$: Observable<string>;
  constructor(private state: StateService) {
    this.searchFor$ = state.getState();
   }

  ngOnInit() {
  }

}
