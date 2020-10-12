import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items:Product[];
  totalProct: number;
  checkoutForm: FormGroup;

  constructor(private cartService: CartService, private formBuilder:FormBuilder) { 
   this.items = cartService.getItems();
   this.totalProct = cartService.getTotalPrice();
   this.checkoutForm = formBuilder.group({
     name:'',
     address:''
   });

  }

  ngOnInit() {
  }

  onsubmit(checkoutForm){
    this.items = this.cartService.clear();
    console.warn(checkoutForm.value);
  }

}