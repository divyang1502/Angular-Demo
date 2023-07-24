import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  langs: string[] = [
    'English',
    'French',
    'German',
  ]
  submitForm(data: any){
    console.log(data);
  }

  sampleForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    language: new FormControl(''),
  });

  submitData(){
    console.log(this.sampleForm.value);
    
  }
}
