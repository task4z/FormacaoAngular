import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { ArrayComponent } from './array/array.component';
import { UpdateComponent } from './update/update.component';
import { BuilderComponent } from './builder/builder.component';
import { ValidatorTemplateComponent } from './validator-template/validator-template.component';
import { ValidatorReactiveComponent } from './validator-reactive/validator-reactive.component';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';
import { ValidatorGroupComponent } from './validator-group/validator-group.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    ArrayComponent,
    UpdateComponent,
    BuilderComponent,
    ValidatorTemplateComponent,
    ValidatorReactiveComponent,
    CustomValidatorComponent,
    ValidatorGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
