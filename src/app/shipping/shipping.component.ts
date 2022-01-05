import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts: any;
  constructor(private cartService: CartService) { 
    this.cartService.getShippingPrices().subscribe((data: any) => {
      this.shippingCosts = data;
      console.log(this.shippingCosts);
    });
  }

  ngOnInit(): void {
    console.log(this.shippingCosts);
  }

}
