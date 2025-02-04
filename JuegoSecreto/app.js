let numeroSecreto = 0;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto)
/*console.log(numeroSecreto)*/

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); /*document. es el
    puente entre el html y js*/
elementoHTML.innerHTML = texto;
return;

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos)
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        /*No acierta*/
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor')
        } else {
            asignarTextoElemento('p', 'El número es mayor')
        } 
        intentos++;
        limpiarCaja();
    }
    return;
}
    function limpiarCaja() {
       let valorCaja = document.querySelector('#valorUsuario')
        valorCaja.value = '';
    }

function generarNumeroSecreto() {
        let numerosGenerados = Math.floor(Math.random()*numeroMaximo)+1;
        console.log(numerosGenerados);
        console.log(listaNumerosSorteados);
        //SI se han sorteados todos los numeros//
        if (listaNumerosSorteados.length == numeroMaximo){
            asignarTextoElemento('p', 'Ya se han sorteado todos los números posibles!')
        } else{

        //Si el num generado esta incluido en la lista//

        if (listaNumerosSorteados.includes(numerosGenerados)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numerosGenerados);
            return numerosGenerados;
        }
    
        }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);