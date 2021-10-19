import { fromEvent, map } from "rxjs";

const texto = document.createElement('div');
const body = document.querySelector('body');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet fringilla eros. Vestibulum eget dui in arcu auctor volutpat. Pellentesque vel turpis porta, sollicitudin mi ornare, tristique enim. Vivamus vestibulum dui eget bibendum semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et justo dapibus, posuere nibh ut, faucibus dui. Suspendisse nec nibh vitae metus blandit mollis. Vestibulum auctor magna congue pellentesque tristique. Nunc sit amet vulputate lacus, nec consectetur arcu. Nam urna quam, dapibus ut odio sed, egestas malesuada tortor. Pellentesque mollis lectus vitae nunc vehicula elementum. Nam ac luctus eros, ut bibendum purus.
<br><br>
Vivamus semper purus sagittis sollicitudin efficitur. Maecenas ultrices diam sed lacinia consequat. Proin cursus quam sem, at placerat urna vulputate eu. Pellentesque faucibus dui a sapien iaculis feugiat. Cras pulvinar sagittis porta. Curabitur bibendum, elit a pretium vulputate, turpis dolor cursus felis, sit amet consequat est tortor at lorem. Vivamus sodales leo vitae hendrerit sollicitudin. Fusce at semper nunc, in luctus odio. Curabitur ligula diam, fringilla id urna a, congue ultrices nunc. Proin efficitur dui nisl, sit amet volutpat libero tincidunt in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam euismod lorem et turpis gravida, sit amet ultrices eros congue. Pellentesque nec eros eu lacus rutrum condimentum in et leo.
<br><br>
Nullam vestibulum libero sed orci vestibulum semper. Vestibulum pellentesque consectetur justo id interdum. Suspendisse molestie leo elit, id vulputate libero accumsan quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam egestas est a ex pharetra, blandit ullamcorper metus congue. Donec tristique finibus tempor. Nunc viverra, erat at fermentum blandit, tortor felis ultricies tellus, eu lacinia massa dolor ac dolor. Vivamus consequat pharetra accumsan.
<br><br>
Phasellus finibus enim sit amet consectetur aliquam. Morbi finibus faucibus elementum. Proin dapibus, ligula et laoreet bibendum, urna orci finibus libero, imperdiet laoreet erat massa laoreet ligula. Maecenas commodo sodales ipsum, eget laoreet nisi imperdiet vitae. Suspendisse sed dignissim nisl. Proin eu felis feugiat, interdum quam non, facilisis lectus. Proin lobortis ac massa nec volutpat. Pellentesque felis ligula, fermentum quis gravida in, sagittis a lorem. Vestibulum suscipit nibh ut luctus blandit. Morbi at velit tellus. In facilisis mi ex, ac ullamcorper odio faucibus quis.
<br><br>
Vestibulum eleifend tortor ligula, et dictum justo volutpat vel. Nulla ac volutpat eros. Maecenas elementum ullamcorper suscipit. Phasellus convallis nibh eget justo lacinia consectetur. Fusce at lectus laoreet, suscipit magna vitae, ultricies odio. Vestibulum sit amet quam volutpat, tristique sapien eget, eleifend eros. Donec dolor metus, feugiat eu sodales sed, porttitor ut nisi. Suspendisse potenti. Ut vel ligula lacus. Fusce viverra feugiat finibus. Mauris gravida ex nec venenatis facilisis. Sed feugiat velit vel augue consequat, vel mollis ipsum consequat.
`;
body.append(texto);

const progessbar = document.createElement('div');
progessbar.setAttribute('class', 'progress-bar');
body.append(progessbar);

//funcion del calculo
const calcularPorcentajeScroll = (event) => {
    const{
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}



const progreso$ = fromEvent(document, 'scroll').pipe(
    map(event => calcularPorcentajeScroll(event))
).subscribe(valor => {
    progessbar.style.width = `${valor}%`;
});