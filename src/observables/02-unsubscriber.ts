import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log(value),
    error: error => console.error(error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>(subs => {
    //Creamos un contador
    let count = 0;

    //intervalo para generar numeros consecutivos
    const interval = setInterval(() => {
        count++;
        subs.next(count);
        console.log(count);
    }, 1000)

    //timeout para completar el subscribe
    setTimeout(() => {
        subs.complete();
    }, 3000);


    //return para finalizar el intervalo
    //Si no se finaliza el intervalo, seguira haciendo conteo de numeros 
    return() => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
})


//subscribcion al observable
const sub1 = intervalo$.subscribe(observer);
//const sub2 = intervalo$.subscribe(observer);
//const sub3 = intervalo$.subscribe(observer);

//formas de agregar mas subscriber a uno solo
//sub1.add(sub2).add(sub3);

//timeout para ubsubscribe al observable
setTimeout(() => {
    console.log('Unsubscriber al observable');
    sub1.unsubscribe();
},4000)