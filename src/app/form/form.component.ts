import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

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
    first_name: new FormControl('',Validators.required),
    last_name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
    language: new FormControl('',Validators.required),
  });

  submitData(){
    console.log(this.sampleForm.value);
  }
  get firstName(){
    return this.sampleForm.get('first_name');
  }
  get lastName(){
    return this.sampleForm.get('last_name');
  }
  spanStyle=['background-color:yellow'];
}
