import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostData } from '../post.model';
import { Subscription, catchError, count, interval, map, throwError } from 'rxjs';
interface ResponseData {
  [key: string]: any; 
}
interface PostItem {
  id: string;
}
@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  constructor(private http:HttpClient) { }
  createAndStorePost(data:PostData){
    this.http.post('http://localhost:3000/posts',data).subscribe(data => {
      console.log("Data Send!");
    });
  }
  fetchposts(){
   return this.http.get<ResponseData>('http://localhost:3000/posts')
    .pipe(map(responseData=>{
      const postArray:PostItem[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postArray.push({...responseData[key],id:key});
        }
      }
      return postArray;
    }),
    catchError(error =>{
      return throwError(error);
    })
    );
  }

  deletePost(){
    return this.http.get<ResponseData>('http://localhost:3000/posts');
  }
}
