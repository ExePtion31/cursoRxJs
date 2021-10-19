import { auditTime, fromEvent, map, tap } from "rxjs";

fromEvent<MouseEvent>(document, 'click').pipe(
    map(({x}) => ({x})),
    tap(val => console.log('valor: ', val)),
    auditTime(4000)
).subscribe(console.log);