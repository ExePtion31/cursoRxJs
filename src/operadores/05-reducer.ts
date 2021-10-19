import { interval, reduce, take, tap } from "rxjs";

//const totalReducer = (acumulador:number, valorActual:number) => {
    //return acumulador + valorActual;
//}

const totalReducer = (acc, cur) => acc + cur;


//reducer para hacer suma de un acumulado
interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer)
).subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completado')
});