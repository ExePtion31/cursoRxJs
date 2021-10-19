import { fromEvent, map, sampleTime } from "rxjs";

fromEvent<MouseEvent>(document, 'click').pipe(
    sampleTime(2000),
    map(({x, y}) => ({x, y}))    
).subscribe(console.log);