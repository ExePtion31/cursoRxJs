import { asyncScheduler, distinctUntilChanged, fromEvent, pluck, throttleTime } from "rxjs";

const input = document.createElement('input');
document.querySelector('body').append(input);

fromEvent<KeyboardEvent>(input, 'keyup').pipe(
    throttleTime(2000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);