/*

Tamara Montero Cano
10/10
Ejercicio 2
*/


const calcularRandom = (inicial, final) => {

    let contador = 0;

    while(contador<veces){

        let numero =  (Math.floor(Math.random() * final + inicial));
        contador++;

        console.log('Número aletorio ' + numero);
    }

}

let veces = parseInt(prompt('Cantidad de números aleatorios'));

let inicial = parseInt(prompt('Rango inicial'));

let final = parseInt(prompt('Rango final'));

calcularRandom(inicial, final);




