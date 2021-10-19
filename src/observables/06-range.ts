import { asyncScheduler, of, range } from 'rxjs';

//const src$ = of(1,2,3,4,5);
/**
 * Por defecto el range es sincrono pero, al usar el asyncScheduler volvemos asincrono la funcion
 */
const src$ = range(1, 5, asyncScheduler);

console.log('Inicio');
src$.subscribe(console.log);
console.log('Fin');