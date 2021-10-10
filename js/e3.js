/*

Tamara Montero Cano
10/10
Ejercicio 3 - Mumero primo
*/


const calculaPrimo = (numero) =>{


    if((numero%numero == 0) && (numero % 1 == 0)){

        return true;
    }else{

        return false;
    }

}

let numero = parseInt(prompt('Indica un número'));

let resultado = calculaPrimo(numero);

alert ('El resultado es ' + resultado);

