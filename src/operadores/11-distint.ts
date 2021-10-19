import { distinct, of, skip, from } from "rxjs";


of(1,2,3,4,5).pipe(
    skip(2)
).subscribe({
    next: value => console.log('Valor: ', value),
    complete: () => console.log('Completado')
});


of(1,2,3,4,4,5,6,5,6,7,7).pipe(
    distinct()
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
    nombre: 'Doctor X'
},
{
    nombre: 'Spiderman'
},
{
    nombre: 'Megaman'
},
{
    nombre: 'Spiderman'
}];

from(personaje).pipe(
    distinct(p => p.nombre)
).subscribe({
    next: value => console.log('Valor: ', value),
    complete: () => console.log('Completado')
})