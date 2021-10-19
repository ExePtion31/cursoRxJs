import { exhaustMap, fromEvent, interval, take } from "rxjs";

//omite los intervalos hasta que termine el que esta en curso
const intervalo$ = interval(1000).pipe(take(3));
fromEvent(document, 'click').pipe(
    exhaustMap(() => intervalo$)
).subscribe(console.log);
