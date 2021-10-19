import { first, fromEvent, map, of, tap } from "rxjs";

of(1,2,3,4,5,6,7).pipe(
    first(dato => dato <= 4)
).subscribe({
    next: value => console.log('Value: ', value),
    complete: () => console.log('Completado')
});


fromEvent<MouseEvent>(document, 'click').pipe(
    map(({clientX, clientY}) => ({clientX, clientY})),
    first(event => event.clientY >= 150)
).subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completado')
});