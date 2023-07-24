import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Divyang';
  int = 2;
  getName(name: string){
    console.log('Your name is '+name);
  };
  color="red";
  updateColor(){
    (this.color == "green")? this.color = "red" : this.color = "green";
  }
  userData:any = {};
  getData(data:NgForm){
    this.userData = data;
  }

  display=true;
  toggle(){
    this.display=!this.display;
  }
  list:any[]= [];
  addTask(data:string){
    this.list.push({id:this.list.length,name:data});
  }
  removeElement(id:number){
    this.list=this.list.filter(item=>item.id!=id);
  }

  data=10;
  updateChild(){
    this.data=Math.floor(Math.random()*100);
  }
  users=[
    {name:"Divyang",email:"divyang@gmail.com"},
    {name:"vasim",email:"vasim@gmail.com"},
    {name:"bansi",email:"bansi@gmail.com"},
    {name:"nirmal",email:"nirmal@gmail.com"}
  ];
  parent="Parent";
  updateData(item:string){
    console.log(item);
    this.parent=item;
  }
  name:any;
  pipes:string="Hello My name is Divyang";
  today = Date();
}
