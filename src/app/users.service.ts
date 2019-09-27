import { CounterService } from "./counter.service";


export class UsersService {
    //The arrays that store the data
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    //Injecting the countereservice in the constructor
    //and denoting it with private so we can use it in the service;
    constructor(private counterService: CounterService){

    }
    //sets a users status from inactive to active
    setActiveAccount(id: number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id,1);
        this.counterService.increaseCounter();
    }
    //sets a users status from active to inactive
    setInactiveAccount(id: number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.increaseCounter();
    }
}
