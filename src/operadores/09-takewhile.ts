import { fromEvent, map, of, takeWhile } from "rxjs";

of(1,2,3,4,5,6,7).pipe(
    takeWhile(value => value <= 5)
).subscribe({
    next: value => console.log('Valor: ', value),
    complete: () => console.log('Completado')
});


fromEvent<MouseEvent>(document, 'click').pipe(
    map(({x, y}) => ({x, y})),
    //takeWhile(({y}) => y <= 150)
    takeWhile(({y}) => y <= 150, true) //con el true dispara el ultimo valor que hizo terminar el takewhile
).subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completado')
});