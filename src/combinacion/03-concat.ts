import { concat, interval, of, take } from "rxjs";

const intervalo$ = interval(1000).pipe(
    take(3)
);

concat(
    intervalo$,
    intervalo$,
    of(1,2,3)
).subscribe(console.log)