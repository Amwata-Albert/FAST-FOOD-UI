import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public user: any;
  constructor(public _registerService: RegisterService) { }

  ngOnInit() {
  	this.user = {
      first_name: '',
      last_name: '',
      email: '',
      password1: ''
      
    }
    this._registerService.errors=[]
  }
  registerUser() {
  	console.log(this.user)
    this._registerService.registerUser({'first_name': this.user.first_name, 'last_name': this.user.last_name,'email': this.user.email,'password': this.user.password1});
   }

}