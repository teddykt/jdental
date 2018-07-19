import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  	userList: Object[];
	
	constructor(private userService: UserService, private router: Router) {
		this.getUsers();
	}

	getUsers() {
		this.userService.getUsers().subscribe(
			res => {
        		this.userList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
      		},
      		error => console.log(error)
		)
	}

	// onSelectPrimary(username: string) {
  //   	this.router.navigate(['/primaryTransaction', username]);
  // 	}	

  // 	onSelectSavings(username: string) {
  //   	this.router.navigate(['/savingsTransaction', username]);
  // 	}	

  	enableUser(username: string) {
  		this.userService.enableUser(username).subscribe();
  		location.reload();
  	}

  	disableUser(username: string) {
  		this.userService.disableUser(username).subscribe();
  		location.reload();
  	}


  ngOnInit() {
  }

}
