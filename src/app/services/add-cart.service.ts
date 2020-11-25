import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {

  // http options used for making API calls
  private httpOptions: any;
  meals:any
  errors:boolean=false
  

  constructor(private http:HttpClient,private router:Router) {
  	this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }


  public getOrder() {
    this.http.get(`${environment.apiUrl}/api/meals`, this.httpOptions).subscribe(
      data => {
        this.meals=data
        console.log(data)       
      },
      err => {
        console.log(err)
        this.errors=true
          }
    );
  }



  public createOrder(orders) {
    this.http.post(`${environment.apiUrl}/api/meals`, orders, this.httpOptions).subscribe(
      data => {
        this.getOrder()
       	alert('Order posted successfully')
      },
      err => {
      	console.log(typeof(orders))
        console.log(err)
          }
    );
  }
 


 
}