import { debounceTime, distinctUntilChanged, fromEvent, pluck } from "rxjs";

const input = document.createElement('input');
document.querySelector('body').append(input);

fromEvent<KeyboardEvent>(input, 'keyup').pipe(
    debounceTime(2000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);