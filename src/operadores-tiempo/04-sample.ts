import { fromEvent, interval, sample } from "rxjs";


const click$ = fromEvent(document, 'click');
interval(100).pipe(
    sample(click$)
).subscribe(console.log);