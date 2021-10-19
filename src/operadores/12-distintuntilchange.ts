import { distinctUntilChanged, of, from } from "rxjs";


of(1,2,3,3,4,1,1,2).pipe(
    distinctUntilChanged()
).subscribe({
    next: value => console.log('Valor: ', value),
    complete: () => console.log('Completado')
});

//Ejemplo #2
interface Personajes {
    nombre:string
}

const personaje: Personajes[] = [{
    nombre: 'Megaman'
},
{
    nombre: 'Megaman'
},
{
    nombre: 'Spiderman'
},
{
    nombre: 'Megaman'
},
{
    nombre: 'Spiderman'
},
{
    nombre: 'Spiderman'
}];

from(personaje).pipe(
    distinctUntilChanged((ant, acc) => ant.nombre === acc.nombre)
).subscribe({
    next: value => console.log('Valor: ', value),
    complete: () => console.log('Completado')
});