import { of } from 'rxjs';

const obs$ = of(...[1,2,3,4], 'Texto');


console.log('Inicia del Obs');
obs$.subscribe(
    next => console.log('Valor del of: ', next),
    null,
    () => console.log('Termina la secuencia')
)
console.log('Finaliza Obs');