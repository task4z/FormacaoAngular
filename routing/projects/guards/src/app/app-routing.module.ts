import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { UnsavedGuard } from './unsaved.guard';

const routes: Routes = [{path: '', component: HomeComponent},
{path: 'product', component: ProductDetailComponent,
canActivate: [LoginGuard], canDeactivate: [UnsavedGuard]},
{path: 'login', component: LoginComponent},
{path: 'luxury', loadChildren: './luxury/luxury.module#LuxuryModule'},
{path: '**', component: Error404Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
