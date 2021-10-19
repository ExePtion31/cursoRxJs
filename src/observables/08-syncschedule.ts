import { asyncScheduler } from 'rxjs';

const subs = asyncScheduler.schedule(function(state){
    console.log(state);
    this.schedule(state - 1, 1000)
}, 5000, 5);

asyncScheduler.schedule(() => subs.unsubscribe(), 11000)