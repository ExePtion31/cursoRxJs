import { map, range, tap, Observable, filter } from 'rxjs';


const range$ = range(1,6).pipe(
    tap(valor => console.log('Valor Inicio Tap: ', valor)),
    map(valor => valor * 10),
    tap({
        next: valor => console.log('Valor Final Tap: ', valor),
        complete: () => console.log('Tap finalizado')
    })
).subscribe();


const intervalo$ = new Observable<number>(subs => {
    //Creamos un contador
    let count = 0;

    //intervalo para generar numeros consecutivos
    const interval = setInterval(() => {
        count++;
        subs.next(count);
    }, 500)

    setTimeout(() => {
        subs.complete()
    }, 5000)

    return() => {
        clearInterval();
        console.log('Intervalo finalizado.')
    }

}).pipe(
    filter((val, i) => {
        return val % 2 === 0;
    }),
    tap({
        next: value => console.log('Número par: ', value),
        complete: () => console.log('Ciclo de números pares terminado.')
    })
).subscribe();