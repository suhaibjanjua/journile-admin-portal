import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor( private userService: UserService) {
  }

  ngOnInit() {

     this.users = this.userService.getAllUsers().subscribe(response => {
        console.log(response);

        if (response.responseCode === 200) {
          this.users = response.details;
        } else {
          // this.invalidLogin = true;
        }

     });
  }

}
