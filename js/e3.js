/*

Tamara Montero Cano
10/10
Ejercicio 3 - Mumero primo
*/


const calculaPrimo = (numero) =>{

    let primo = true;

    for (let i = 2; i < numero; i++) {
       
        if(i % numero ==0){
            return primo = false;
        }else{
            return primo;
        }
        
    }

}

let numero = parseInt(prompt('Indica un número'));

let resultado = calculaPrimo(numero);

alert ('El resultado es ' + resultado);

