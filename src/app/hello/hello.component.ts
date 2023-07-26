import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  constructor(private route: ActivatedRoute){

  }
  ngOnInit() {
    console.log("Hello Id", this.route.snapshot.paramMap.get('id'));
  }
}
