import { Component, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  // the users-array expect Names of the users which are set to inactive inn the app component
  // inn the app component they are set to the inactive-array from the service
  @Input() users: string[];
  
   //Injecting the service in the constructor
  constructor(private userService: UsersService){

  }
  
 //This function triggers whenever the link (<a><a/>) is clicked in the template
  onSetToActive(id: number) {
      //using the setInactiveAccount method from the service to
      //push a member with the id from the active-array to the inactive-array
   this.userService.setActiveAccount(id);
  }
}
