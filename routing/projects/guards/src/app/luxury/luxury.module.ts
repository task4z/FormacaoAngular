import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LuxuryComponent } from './luxury.component';

@NgModule({
  declarations: [LuxuryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LuxuryComponent}
    ])
  ]
})
export class LuxuryModule { }
