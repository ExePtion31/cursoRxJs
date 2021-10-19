import { fromEvent, merge, pluck } from "rxjs";

const keyup$ = fromEvent(document, 'keyup').pipe(
    pluck('type')
)

const click$ = fromEvent(document, 'click').pipe(
    pluck('type')
)

merge(
    keyup$,
    click$
).subscribe(console.log)