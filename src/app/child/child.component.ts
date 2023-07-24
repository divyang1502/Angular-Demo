import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input() item=0;
  @Input() item:{name:string,email:string}={name:'',email:''};
  @Output() updatedataEvent = new EventEmitter();
  ngOnInit(): void {

  }
}
