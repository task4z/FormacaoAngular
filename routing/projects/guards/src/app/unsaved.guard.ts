import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductDetailComponent } from './product-detail/product-detail.component';

@Injectable({providedIn: 'root'})
export class UnsavedGuard implements CanDeactivate<ProductDetailComponent> {
  canDeactivate(component: ProductDetailComponent): any {
    if(component.name.dirty){
      return window.confirm('Tem coisas por gravar quer sair?');
    }
    return true;
  }
}
