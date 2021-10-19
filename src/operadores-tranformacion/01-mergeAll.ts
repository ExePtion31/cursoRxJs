import { fromEvent, Observable } from "rxjs";
import { pluck, map, mergeAll, debounceTime } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/GithubUser.interface";
import { GithubUsersResp } from "../interfaces/GithubUsers.interface";


//referencias
const body = document.querySelector('body');
const inputText = document.createElement('input');
const orderList = document.createElement('ol');
body.append(inputText, orderList);

//helpers
const mostratInfo = (usuarios: GithubUser[]) => {
    console.log(usuarios);
    orderList.innerHTML = '';
    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchro = document.createElement('a');
        anchro.href = usuario.html_url;
        anchro.text = 'Ver pagina';
        anchro.target = '_blank';

        li.append(img);
        li.append(usuario.login);
        li.append(anchro);
        orderList.append(li);
        
    }
}

fromEvent<KeyboardEvent>(inputText, 'keyup').pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(evento => evento.target['value']),
    map<string, Observable<GithubUsersResp>>(value => {
        if(value == null || value == ''){
            value = 'a';
        }

        return ajax.getJSON(`https://api.github.com/search/users?q=${value}`);
    }),
    mergeAll(),
    pluck('items')
).subscribe(mostratInfo);