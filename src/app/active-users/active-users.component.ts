import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  // the users-array expect Names of the users which are set to active inn the app component
  // inn the app component they are set to the active-array from the service
  @Input() users: string[];
  
  //Injecting the service in the constructor
  constructor(private userService: UsersService){

  }

  //This function triggers whenever the link (<a><a/>) is clicked in the template
  onSetToInactive(id: number) {
      //using the setInactiveAccount method from the service to
      //push a member with the id from the active-array to the inactive-array
    this.userService.setInactiveAccount(id);
  }
}
