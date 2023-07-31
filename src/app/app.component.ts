import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserDataService } from './service/user-data.service'
import { Subscription, count, interval, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostDataService } from './service/post.service';
interface ResponseData {
  [key: string]: any; 
}
interface PostItem {
  id: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userDatas: any;
  private observer: Subscription = new Subscription();
  constructor(public userDataService: UserDataService,private http: HttpClient,private postService: PostDataService) {
    userDataService.users().subscribe((data) => {
      this.userDatas = data,
        // this.observer=this.observer,
        console.log("data", data);
    });
  };

  ngOnInit() {
    // this.observer = interval(1000).subscribe(count => {
    //   console.log(count);
    // })
    this.onFetchData();
  }
  ngOnDestroy() {
    this.observer.unsubscribe();
  }
  title = 'Divyang';
  int = 2;
  getName(name: string) {
    console.log('Your name is ' + name);
  };
  color = "red";
  updateColor() {
    (this.color == "green") ? this.color = "red" : this.color = "green";
  }
  userData: any = {};
  getData(data: NgForm) {
    this.userData = data;
  }

  display = true;
  toggle() {
    this.display = !this.display;
  }
  list: any[] = [];
  addTask(data: string) {
    this.list.push({ id: this.list.length, name: data });
  }
  removeElement(id: number) {
    this.list = this.list.filter(item => item.id != id);
  }

  data = 10;
  updateChild() {
    this.data = Math.floor(Math.random() * 100);
  }
  users = [
    { name: "Divyang", email: "divyang@gmail.com" },
    { name: "vasim", email: "vasim@gmail.com" },
    { name: "bansi", email: "bansi@gmail.com" },
    { name: "nirmal", email: "nirmal@gmail.com" }
  ];
  parent = "Parent";
  updateData(item: string) {
    console.log(item);
    this.parent = item;
  }
  name: any;
  pipes: string = "Hello My name is Divyang";
  today = Date();

  canSave: string = '';
  isUnchanged: string = '';
  isSpecial: string = '';


  loadPosts:ResponseData[]=[];
  isFeching: boolean = false;
  error=null;
  postForm:FormGroup = new FormGroup({
    post_name: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
  });
  submitPostData(){
    this.postService.createAndStorePost(this.postForm.value);    
  }
  onFetchData(){
    this.isFeching=true;
    this.postService.fetchposts().subscribe(data => {
      this.isFeching = false;
      this.loadPosts=data;
    },
    error=>this.error=error.message
    );
  }
  clearPosts(){
    this.postService.deletePost().subscribe(data => {
      this.loadPosts=[];
    });
  }
}
