import { interval, timer } from 'rxjs';

const observe = {
    next: valor => console.log(valor),
    complete: () => console.log('completado')
};

//consultamos la fecha de hoy y le agregamos 5 segundos
const en5segundos = new Date();
en5segundos.setSeconds(en5segundos.getSeconds() + 5);

//const intervalo$ = interval(1000);
const timer$ = timer(en5segundos);

console.log('Inicio');
timer$.subscribe(observe);
console.log('Fin');