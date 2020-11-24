import { Component, OnInit } from '@angular/core';
import {OrderlistService} from '../services/orderlist.service'

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  public orderlist: any

  constructor(public _orderlistService: OrderlistService) { }

  ngOnInit():void{
    this._orderlistService.getCurrentOrder()
    this.orderlist={
      order_id:'',
      food: '', 
      quantity:'',
      user:'',
      address:'',
      status:'',
      order_timestamp:'',
      amount:'',
      // user:localStorage.current_userid
    }
  }
  getCurrentOrder(){
    this._orderlistService.getCurrentOrder()
  }

}
