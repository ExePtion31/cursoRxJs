import { ajax } from "rxjs/ajax";

const url = `https://httpbin.org/delay/1`;

//get
ajax.getJSON(url).subscribe(console.log);

//post
ajax.post(url, {
    id: 1,
    nombre: 'Juan'
},{
    'mi-token': 'ABC123'
}).subscribe(console.log);

//put
ajax.put(url, {
    id: 1,
    nombre: 'Juan'
},{
    'mi-token': 'ABC123'
}).subscribe(console.log);  

//segundo metodo
ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': '123abc'
    },
    body: {
        id: 1,
        nombre: 'Giovanni'
    }
}).subscribe(console.log);