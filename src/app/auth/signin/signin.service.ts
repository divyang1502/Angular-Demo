import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, catchError, count, interval, map, throwError } from 'rxjs';

interface authResponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
} 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
    
  signUp(email:string, password:string){
    return this.http.post<authResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
    {
        email: email,
        password: password,
        returnsecureToken: true,
    });
  }
  loginUp(email:string, password:string){
    return this.http.post<authResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBLfJP3f8rYTuhueuT8KRyJ4ZMLKOrkyLc',
    {
        email: email,
        password: password,
        returnsecureToken: true,
    });
  }
}
