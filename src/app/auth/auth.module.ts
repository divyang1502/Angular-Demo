import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { PasswordComponentComponent } from './password-component/password-component.component';



@NgModule({
  declarations: [
    SigninComponent,
    PasswordComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
