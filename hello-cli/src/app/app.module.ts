import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MinhaCompComponent } from './minha-comp/minha-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MinhaCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
