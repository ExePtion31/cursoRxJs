import { map, catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'


const manejaErrores = (error : AjaxError) => {
    console.warn(error.message)
    return of({});
};

const url = `https://api.github.com/users?per_page=5`;

//const fetchPromesa = fetch(url);

//fetchPromesa.then(manejaErrores)
//.then(resp => resp.json())
//.then(resp => console.log(resp))
//.catch(err => console.warn('Error: ',err));

ajax(url).pipe(
  map(array => console.log(array.response)),
  catchError(manejaErrores)
).subscribe();