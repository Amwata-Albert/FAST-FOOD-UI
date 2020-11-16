import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public user: any;
  constructor(public _userService: RegisterService) { }

  ngOnInit() {
  	this.user = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
      
    }
    this._userService.errors=[]
  }
  registerUser() {
  	console.log(this.user)
    this._userService.registerUser({'first_name': this.user.first_name, 'last_name': this.user.last_name,'email': this.user.email,'password': this.user.password});
   }

}