import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // http options used for making API calls
  private httpOptions: any;
  customers:any
  errors:boolean=false
  

  constructor(private http:HttpClient,private router:Router) {
  	this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }


  public getCustomers() {
    this.http.get(`${environment.apiUrl}/api/customer`, this.httpOptions).subscribe(
      data => {
        this.customers=data
        console.log(data)       
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }



  public createCustomer(customer) {
    this.http.post(`${environment.apiUrl}/api/customer`, customer, this.httpOptions).subscribe(
      data => {
        this.getCustomers()
       	alert('Customer created successfully')
      },
      err => {
      	console.log(typeof(customer))
        console.log(err)
          }
    );
  }
 


 
}