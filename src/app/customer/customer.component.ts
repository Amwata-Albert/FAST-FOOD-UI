import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customer:any;

  constructor(public _customerService: CustomerService) {

   }

   ngOnInit(): void {
  	this._customerService.getCustomers()
  	this.customer={
  		name:'',
      email:'',
      contact:'',
  		user:localStorage.current_userid
  	}
  }


  addCustomer(){
  	this._customerService.createCustomer(this.customer)
  }

}