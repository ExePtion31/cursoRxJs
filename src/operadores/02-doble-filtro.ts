import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators'

interface Personajes{
    nombre: String;
    apellido: String;
    ubicacion: {
        pais: String;
        ciudad: String;
    };
    edad: number;
}

const data: Personajes[] = [
    {
        nombre: 'Juan',
        apellido: 'Perez',
        ubicacion: {
            pais: 'Colombia',
            ciudad: 'Bogotá'
        },
        edad: 32
    },
    {
        nombre: 'Giovanni',
        apellido: 'Baquero',
        ubicacion: {
            pais: 'Colombia',
            ciudad: 'Bogotá'
        },
        edad: 21
    },
    {
        nombre: 'Andres',
        apellido: 'Lopez',
        ubicacion: {
            pais: 'Argentina',
            ciudad: 'Buenos Aires'
        },
        edad: 21
    }
]


//filter 
range(1, 10).pipe(
    filter((val, i) => {
        return val % 2 === 1
    })
).subscribe(console.log);


from(data).pipe(
    filter(value => value.ubicacion.pais === 'Colombia')
).subscribe(console.log);


//doble filtro
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.key), filter(key => key === 'Enter')
).subscribe(console.log);