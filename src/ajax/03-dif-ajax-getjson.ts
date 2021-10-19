import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = `https://httpbin.org/delay/1`;
const manejoError = (error: AjaxError) => {
    console.warn('Error en Ajax: ', error);
    return of({
        ok: false,
        usuarios: []
    });
}

ajax.getJSON(url).pipe(
    catchError(manejoError)
).subscribe(console.log);