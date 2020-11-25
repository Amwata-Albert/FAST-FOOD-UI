import { Component, OnInit } from '@angular/core';
import { AddCartService } from '../services/add-cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
 

  public orders:any;

  constructor(public _addCartService: AddCartService) {

   }

   ngOnInit(): void {
  	this._addCartService.getOrder()
  	this.orders={
  		address:'',
      contact:'',
  		user:localStorage.current_userid
  	}
  }


  addOrder(){
  	this._addCartService.createOrder(this.orders)
  }

}