import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log(value),
    error: error => console.error(error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(() => subs.next(
        Math.random()
    ), 1000);

    return () => {
        clearInterval(intervalID);
        console.log('Intervalo finalizado');
    }
})

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next('Completando observable');
    subject$.complete();
    subscription.unsubscribe();

}, 4000 )