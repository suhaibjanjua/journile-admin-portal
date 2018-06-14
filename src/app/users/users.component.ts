import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  isActive: boolean;

  constructor( private userService: UserService) {
  }

  ngOnInit() {

     this.userService.getAllUsers().subscribe(response => {
        console.log(response);

        if (response.responseCode === 200) {
          this.users = response.details;
        } else {
          // this.invalidLogin = true;
        }

     });
  }


  toggleAccount(id, name, isActive) {

    console.log(isActive);
    const userStatus = (isActive) ? ('deactivate') : ('activate');
    if (confirm('Are you sure you want to ' + userStatus + ' "' + name + '" user?')) {

      this.userService.activateDeactivateAccount(id, !isActive)
      .subscribe(response => {
        console.log(response);
        if (response.responseCode === 200) {
          console.log('Channel is deleted successfully.');
          alert('Channel is deleted successfully.');
        } else {
          console.log(response.responseDescription);
          alert(response.responseDescription);
        }
      });

    }
  }

}
