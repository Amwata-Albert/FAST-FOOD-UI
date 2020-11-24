import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  baseUrl = 'http://127.0.0.1:8000/api/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getMealList(): Observable<any>{
    return  this.http.get(this.baseUrl + 'meals', {headers: this.httpHeaders})
  }

  addMeal(meal): Observable<any>{
    let body  = { food_id: meal.title, name: meal.description, price: meal.content, photo: meal.published, category:meal.date_posted};
    return  this.http.post(this.baseUrl + 'meals',body, {headers: this.httpHeaders});
  };
  deleteMeal(id): Observable<any>{
    return  this.http.delete(this.baseUrl + 'meals' + id + '/', {headers: this.httpHeaders});
  };


}
