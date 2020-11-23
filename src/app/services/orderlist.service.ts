import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class OrderlistService {
  
  // http options used for making API calls
  private httpOptions: any;
  orderlist:any
  errors:boolean=false
  
  constructor(private http:HttpClient,private router:Router) {
  	this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }

public getCurrentOrder() {
  this.http.get(`${environment.apiUrl}/api/currentorder`, this.httpOptions).subscribe(
    data => {
      this.orderlist=data
      console.log(data)       
    },
    err => {
      console.log(err)
      this.errors=true
        }
  );
      }

  

}