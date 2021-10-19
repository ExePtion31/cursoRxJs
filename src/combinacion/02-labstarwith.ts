import { startWith } from "rxjs";
import { ajax } from "rxjs/ajax";

const bodyLoading = document.createElement('div');
bodyLoading.classList.add('loading');
bodyLoading.innerHTML= 'Cargando...';

const body = document.querySelector('body');

//Stream
ajax.getJSON('https://reqres.in/api/users/5?delay=10').pipe(
    startWith(true)
).subscribe(resp => {
    if(resp === true){
        body.append(bodyLoading);
    }else{
        body.querySelector('.loading').remove();
    }

    console.log(resp);
})