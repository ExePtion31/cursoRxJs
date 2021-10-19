import { from, of } from 'rxjs';

const observe = {
    next: value => {
        console.log(value)
    },
    complete: () => console.log('Terminado el observe')
};

const data = [{
    nombre: 'Giovanni',
    Apellido: 'Baquero',
    Edad: 21,
    Cargo: 'Desarrollador junior'
},
{
    nombre: 'Juan',
    Apellido: 'Alberto',
    Edad: 232,
    Cargo: 'Desarrollador Backend'
}]

//const source$ = from([1,2,3,4,5]);
//const source$ = of([1,2,3,4,5]);
//const source$ = from('Giovanni');
const source$ = from(fetch('https://cwbddyt3ia.execute-api.us-east-2.amazonaws.com/v1/products'));

source$.subscribe(async(resp) => {
    const dataResp = await resp.json();
    console.log(dataResp);
});