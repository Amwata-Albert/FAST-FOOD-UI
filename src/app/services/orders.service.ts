import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private httpOptions: any;
  orders:any
  errors:boolean=false
  

  constructor(private http:HttpClient,private router:Router) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }

   public getOrders() {
    this.http.get(`${environment.apiUrl}/api/currentorder`, this.httpOptions).subscribe(
      data => {
        this.orders=data
        console.log(data)       
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }

  public createOrder(orders) {
    this.http.post(`${environment.apiUrl}/api/currentorder`, orders, this.httpOptions).subscribe(
      data => {
        this.getOrders()
       	alert('Customer created successfully')
      },
      err => {
      	console.log(typeof(orders))
        console.log(err)
          }
    );

}
}
