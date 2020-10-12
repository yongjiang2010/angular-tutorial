import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  
  constructor(private route:ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params =>{ 
        const id = params.get("id");
        this.product = products[id];
      }
    )
  }

  addToCart(product: Product){
   
    this.cartService.addItem(product);
    //alert(product.name + " added to your shopping cart.");
  }

}