import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service'


@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

  public meals:any;

  constructor(public _orderService: OrderService) {

   }

   ngOnInit(): void {
  	this._orderService.getMeals()
  	this.meals={
  		name:'',
      email:'',
      contact:'',
  		user:localStorage.current_userid
  	}
  }


  addCustomer(){
  	this._orderService.createMeals(this.meals)
  }

}

