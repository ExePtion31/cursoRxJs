import { Observable, Observer } from 'rxjs';

//Se crea un objeto de tipo observer para administrar los errors, next y complete
const observer: Observer<any> = {
    next: value => console.log(value),
    error: error => console.error(error),
    complete: () => console.info('Completado')
}

//const obs$ = Observable.create();

//se crea el observable con los valores a recibir
const obs$ = new Observable(subs => {
    subs.next('Pepito');
    subs.next('Gomez');
});

//nos suscribimos al observable para tomar esos valores
obs$.subscribe(observer);