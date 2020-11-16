import { Component, OnInit } from '@angular/core';
import { UserServiceService } from  '../services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: any;
  constructor(public _userService: UserServiceService) { }

  ngOnInit() {
  	this.user = {
      first_name: '',
      last_name: '',
      email: '',
      roles: '',
      password: '',
    }
    this._userService.errors=[]
  }
  registerUser() {
  	console.log(this.user)
    this._userService.registerUser({'first_name': this.user.first_name, 'last_name': this.user.last_name,'email': this.user.email,'password': this.user.password});
   }

}
