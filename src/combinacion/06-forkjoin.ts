import { forkJoin, interval, take, of } from "rxjs";

const interval1$ = of(1,2,3,4,5)
const interval2$ = interval(1000).pipe(
    take(4)
)
const interval3$ = of('a', 'b', 'c', 'd')

// forkJoin(
//     interval1$,
//     interval2$,
//     interval3$
// ).subscribe(values => {
//     console.log('Números: ', values[0]),
//     console.log('Intervalo: ', values[1]),
//     console.log('Letras: ', values[2])
// });

forkJoin({
    Numeros: interval1$,
    Intervalo: interval2$,
    Letras: interval3$  
}).subscribe(console.log);