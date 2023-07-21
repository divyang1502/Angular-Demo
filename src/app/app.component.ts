import { Component } from '@angular/core';

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
  }
}
