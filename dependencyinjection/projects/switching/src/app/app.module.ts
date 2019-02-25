import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Product2Component } from './product2/product2.component';
import { Product1Component } from './product1/product1.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    Product2Component,
    Product1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
