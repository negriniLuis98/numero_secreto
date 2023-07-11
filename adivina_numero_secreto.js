const rl = require('readline-sync');
const secreto = Math.floor(Math.random() * 100);
console.log(secreto);

function pedirNumeroAleatorio () {
    return parseInt(rl.question('Ingresa un numero cualquiera: '));    
}

console.log('Intenta adivinar este número aleatorio entre 1 y 100!!');
let nro_user = pedirNumeroAleatorio();

while (nro_user !== secreto) {
    if (nro_user < secreto) {
        console.log(`El número secreto es más grande que ${nro_user}, intenta nuevamente:`);
        nro_user = pedirNumeroAleatorio();
    } else {
        console.log(`El número secreto es más pequeño que ${nro_user}, intenta nuevamente:`);
        nro_user = pedirNumeroAleatorio();
    }
}

console.log('Felicidades!! Has adivinado el número secreto!');