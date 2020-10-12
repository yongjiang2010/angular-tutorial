import { Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product:Product;
  @Output() notify = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.notify.emit(this.product);
    //alert(this.product.name);
  }

}