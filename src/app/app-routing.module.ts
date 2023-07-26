import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './user-auth/login/login.component';
import { HelloComponent } from './hello/hello.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutComponent } from './about/about.component';
import { StudenstListComponent } from './studenst-list/studenst-list.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: 'form',
    component:FormComponent
  },
  {
    path: '',
    component:Component
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path:'hello/:id',
    component:HelloComponent
  },
  {
    path:'about',
    component:AboutComponent,
    children:[
      {path:'student1', component:StudenstListComponent},
      {path:'student2', component:StudentListComponent}
    ]
  },
  {
    path:'**',
    component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
