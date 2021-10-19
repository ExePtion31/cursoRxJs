import { endWith, of, startWith } from "rxjs";

of(1,2,3,4).pipe(
    endWith(5),
    startWith(0)
).subscribe(console.log);