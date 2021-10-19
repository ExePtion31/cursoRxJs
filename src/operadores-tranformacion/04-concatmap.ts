import { concatMap, fromEvent, interval, take } from "rxjs";

//Cada nuevo intervalo queda en una cola de espera hasta que termine el intervalo anterior
const intervalo$ = interval(1000).pipe(take(3));
fromEvent(document, 'click').pipe(
    concatMap(() => intervalo$)
).subscribe(console.log);
