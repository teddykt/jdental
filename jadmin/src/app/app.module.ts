import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { routing } from './app.routing';
import { UserService } from './user.service';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentService } from './appointment.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppointmentsComponent,
    UsersComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    LoginService,
    UserService,
    AppointmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
