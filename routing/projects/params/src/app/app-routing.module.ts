import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [{path: '', component: HomeComponent},
{path: 'product', component: ProductDetailComponent},
{path: 'product/:id', component: ProductDetailComponent},
{path: '**', component: Error404Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
