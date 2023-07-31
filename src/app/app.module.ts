import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { HttpClient, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudenstListComponent } from './studenst-list/studenst-list.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChildComponent } from './child/child.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RedElDirective } from './directive/red-el.directive';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UserListComponent,
    StudentListComponent,
    StudenstListComponent,
    ChildComponent,
    UsdInrPipe,
    FormComponent,
    RedElDirective,
    ErrorPageComponent,
    AboutComponent,
    FooterComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
