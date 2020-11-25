import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public order:any

  constructor(public _orderService: OrdersService) {

   }
  
  ngOnInit(): void {
  	this._orderService.getOrders()
  	this.order={
  		order_id:'',
      quality:'',
      status:'',
      address:'',
      amount:'',


  		user:localStorage.current_userid
  }
}

  addOrder(){
  	this._orderService.createOrder(this.order)
  }
}
