import { fromEvent, tap, map, mergeMap, pluck, exhaustMap, catchError, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const formulario = document.querySelector('form');

//helpers
const httpRequestLogin = ( datosLosgin ) => ajax.post('https://reqres.in/api/login?delay=1', datosLosgin).pipe(
    pluck('response', 'token'),
    catchError(error => of('Error al iniciar sesión')));


//Streams
fromEvent(formulario, 'submit').pipe(
    tap(event => event.preventDefault()),
    map(event => ({
        email: event.target[0].value,
        password: event.target[1].value
    })),
    exhaustMap( httpRequestLogin )
).subscribe(console.log);