let numero = 0;
let intentos = 0;
let lista = [];
let NumeroMaximoIntentos = 10 ;
function valorDeLaFuncion (tituloDelJuego, parrafoDelJuego) {
    let element = document.querySelector(tituloDelJuego);
    element.innerHTML = parrafoDelJuego;
    return;
}
//a
function verificarIntento(){
   let  numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   if (numeroDeUsuario === numero){
        valorDeLaFuncion ("p", `acertase el numero. lo hiciste en ${intentos} ${ intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
   } else{
    if(numeroDeUsuario > numero){
        valorDeLaFuncion('p', 'el numero es menor')
    } else{
        valorDeLaFuncion('p', 'el numero es mayor') 
    }
    intentos++;
    limpiarCaja()
   }
    return;
}

//a

function limpiarCaja (){
    document.querySelector ("#valorUsuario").value= "";

}
function generarNumero() {
    let numeroGenereado = Math.floor(Math.random()*NumeroMaximoIntentos)+1;

    console.log(numeroGenereado);
    console.log(lista);


    if(lista.length === NumeroMaximoIntentos ){
        valorDeLaFuncion("p", "Ya se sortearon todos los números");
    } else {
        if (lista.includes(numeroGenereado)){
            return generarNumero();
        } else {
            lista.push(numeroGenereado);
            return numeroGenereado;
        }
    }   
}

function CondicionesInicialesDelJuego(){
    limpiarCaja();
    valorDeLaFuncion('h1','Juego del número secreto!');
    valorDeLaFuncion('p',`Indica un número del 1 al ${NumeroMaximoIntentos}`);
    numero = generarNumero();
    intentos = 1;
    console.log(numero)

}

function ReiniciarJuego(){
    CondicionesInicialesDelJuego();
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}
CondicionesInicialesDelJuego();
