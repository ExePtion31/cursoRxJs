import { fromEvent, interval, takeUntil } from "rxjs";


const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';
document.querySelector('body').append(boton);

const clickBtn$ = fromEvent(boton, 'click');

interval(1000).pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: value => console.log('valor: ', value),
    complete: () => console.log('Completado')
});