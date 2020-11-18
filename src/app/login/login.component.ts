import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any;

  	constructor(public _registerService: RegisterService) { }

  	ngOnInit(){
  	this.user = {
      email: '',
      password: ''
    }
    this._registerService.errors=[]
  	}


  	login() {
    this._registerService.login({'email': this.user.email, 'password': this.user.password});
   }
 
  refreshToken() {
    this._registerService.refreshToken();
  }
 
  logout() {
    this._registerService.logout();
  }

}
