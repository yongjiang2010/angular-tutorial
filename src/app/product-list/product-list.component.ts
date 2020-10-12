import { Component } from '@angular/core';
import { Product } from '../models/product';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(p:Product) {
    window.alert('The product has been shared!' + p.name);
  }

  notify(p:Product){
    window.alert('You will be notified! ' + p.name);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/