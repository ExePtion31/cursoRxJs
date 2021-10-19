import { of, take } from "rxjs";


of(1,2,3,4,5,6).pipe(
    take(4)
).subscribe({
    next: value => console.log('valor: ', value),
    complete: () => console.log('Completado')
});