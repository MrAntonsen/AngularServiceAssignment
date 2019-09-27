export class CounterService{

    //this Service has a simple job, to increment the counter and log the value to the consol
    counter: number = 1;

    increaseCounter(){
        console.log(this.counter);
        this.counter++;
    }
}