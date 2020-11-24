import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // http options used for making API calls
  private httpOptions: any;
  meals:any
  errors:boolean=false
  

  constructor(private http:HttpClient,private router:Router) {
  	this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
   }


  public getMeals() {
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



  public createMeals(meals) {
    this.http.post(`${environment.apiUrl}/api/meals`, meals, this.httpOptions).subscribe(
      data => {
        this.getMeals()
       	alert('meals created successfully')
      },
      err => {
      	console.log(typeof(meals))
        console.log(err)
          }
    );
  }
 


 
}