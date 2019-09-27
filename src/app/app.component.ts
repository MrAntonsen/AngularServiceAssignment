import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
//We provide the UserService too the app.module.ts but we could have provided it here too instead
//because it will apply to all child components. However we are injecting the userservice with the counterservice
//so in those situations you must to it in the app.module.ts
export class AppComponent implements OnInit {

  //the arrays that gets filled on ngOnInit
  inactiveUsers: string[] = [];
  activeUsers: string[] = [];

  constructor(private UsersService: UsersService){

  }
  // Gets data from the service and fills the arrays
  ngOnInit(){
    this.inactiveUsers = this.UsersService.inactiveUsers;
    this.activeUsers = this.UsersService.activeUsers;
  }
}
