import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private authService: AuthService) { }
  submitForm(data: NgForm) {
    if (!data.valid) {
      return;
    }
    const email = data.value.email;
    const password = data.value.password;
    this.authService.signUp(email, password).subscribe(
      data => {
        console.log(data);
      },
      errorMessage => { 
        console.log(errorMessage) 
      });
    data.reset();
  }

  LoginForm(data:NgForm){
    if (!data.valid) {
      return;
    }
    const email = data.value.email;
    const password = data.value.password;
    this.authService.loginUp(email, password).subscribe(
      data => {
        console.log(data);
      },
      errorMessage => { 
        console.log(errorMessage) 
      });
    data.reset();
  }
}
