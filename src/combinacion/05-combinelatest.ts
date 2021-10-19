import { combineLatest, fromEvent, pluck } from "rxjs";

// const keyup$ = fromEvent(document, 'keyup').pipe(
//     pluck('type')
// )

// const click$ = fromEvent(document, 'click').pipe(
//     pluck('type')
// )

// combineLatest(
//     keyup$,
//     click$
// ).subscribe(console.log)

//helper
const valueInput = (val: HTMLElement) => fromEvent<KeyboardEvent>(val, 'keyup').pipe(
    pluck('target', 'value'));


const input1 = document.createElement('input');
const input2 = document.createElement('input');
input1.placeholder = 'correo@gmail.com';
input2.placeholder = 'contraseña';
document.querySelector('body').append(input1, input2);

combineLatest(
    valueInput(input1),
    valueInput(input2)
).subscribe(console.log);