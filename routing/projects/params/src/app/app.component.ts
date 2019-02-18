import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productId = 1234;

  constructor(private _router: Router) {

  }

  navigateToProductDetail() {
    this._router.navigate(['/product', this.productId]);
    //this._router.navigate(['/product']);
    //this._router.navigateByUrl('/product', {skipLocationChange :true});
  }
}
