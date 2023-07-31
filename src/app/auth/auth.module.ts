import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { PasswordComponentComponent } from './password-component/password-component.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SigninComponent,
    PasswordComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SigninComponent
  ]
})
export class AuthModule {
  
 }
