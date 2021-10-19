import { fromEvent, range, from, of } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators'

const data = {
    nombre: 'Juan',
    apellido: 'Perez',
    ubicacion:{
        pais: 'Colombia',
        ciudad: 'Bogotá'
    },
    edad: 21
}

//pipe map
range(1,3).pipe(
    map<number, number>(val => val * 10)
).subscribe(console.log);

const keyEvent$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code)
).subscribe(console.log);

const dataMap$ = of(data).pipe(
    map(event => event.nombre)
).subscribe(console.log);

//pipe pluck
const dataPluck$ = of(data).pipe(
    pluck('ubicacion', 'pais')
).subscribe(console.log);


//pipe mapTo
const keyEvent2$ = fromEvent<KeyboardEvent>(document, 'keyup');
const mapTo$ = keyEvent2$.pipe(
    mapTo('Tecla presionada')
).subscribe(console.log);

