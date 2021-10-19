import { from, map, reduce, scan } from "rxjs";

const numbers = [1,2,3,4,5];
const totalReducer = (acc, cur) => acc + cur;

//reduce
from(numbers).pipe(
    reduce(totalReducer, 0)
).subscribe(console.log);

//scan
from(numbers).pipe(
    scan(totalReducer, 0)
).subscribe(console.log);



//Redux
interface Usuarios  {
    id?: number,
    nombre?: string,
    apellido?: string,
    autenticado?: boolean,
    edad?: number
}

const usuario: Usuarios[] = [{id: 1, nombre: 'Giovanni', apellido: 'Baquero', autenticado: true},
{id: 1, nombre: 'Giovanni', apellido: 'Baquero', autenticado: true},
{id: 1, nombre: 'Giovanni', apellido: 'Baquero', autenticado: true}];

const state$ = from(usuario).pipe(
    scan<Usuarios>((acc, curr) => {
        return {...acc, ...curr}
    }),
    map(state => state)
).subscribe(console.log)