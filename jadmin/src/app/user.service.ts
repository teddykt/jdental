import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';


@Injectable()
export class UserService {

  constructor (private http:Http){}

  getUsers() {
    let url = "http://localhost:8080/api/user/all";
    return this.http.get(url, { withCredentials: true });
  }

   getAppointmentList(username: string) {
     let url = "http://localhost:8080/api/user/appointment?username="+username;
    return this.http.get(url, { withCredentials: true });
   }

   enableUser (username: string) {
     let url = "http://localhost:8080/api/user/"+username+"/enable";
     return this.http.get(url, { withCredentials: true });
   }

   disableUser (username: string) {
     let url = "http://localhost:8080/api/user/"+username+"/disable";
     return this.http.get(url, { withCredentials: true });
   }

}
