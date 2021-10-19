import { fromEvent, Observable } from "rxjs";
import { pluck, map, mergeAll, debounceTime, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/GithubUser.interface";
import { GithubUsersResp } from "../interfaces/GithubUsers.interface";


//referencias
const body = document.querySelector('body');
const inputText = document.createElement('input');
body.append(inputText);

const url = 'https://httpbin.org/delay/1?arg=';

fromEvent(inputText, 'keyup').pipe(
    pluck('target', 'value'),
    switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log);