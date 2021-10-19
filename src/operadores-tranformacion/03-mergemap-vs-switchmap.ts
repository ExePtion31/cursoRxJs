import { fromEvent, interval, mergeMap, switchMap } from "rxjs";


const event$ = fromEvent(document, 'click');
const interval$ = interval(1000);

event$.pipe(
    //mergeMap(() => interval$)
    switchMap(() => interval$)
).subscribe(console.log);