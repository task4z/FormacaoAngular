import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { Error404Component } from './error404/error404.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';

const childRoute = [
  {path: '', component: ProductDescriptionComponent},
  {path: 'seller/:id', component: SellerInfoComponent},
  ];
const routes: Routes = [{path: '', component: HomeComponent},
{path: 'product', component: ProductDetailComponent,
children: childRoute
},
{path: 'product/:id', component: ProductDetailComponent,
children: childRoute
},
{path: '**', component: Error404Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
