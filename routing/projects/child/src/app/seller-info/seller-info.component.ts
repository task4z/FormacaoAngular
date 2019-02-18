import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `
      <h4>Seller com id:{{sellerId}}</h4>
  `,
  styles: []
})
export class SellerInfoComponent implements OnInit {

  sellerId: string;

  constructor(route: ActivatedRoute) {
    this.sellerId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
