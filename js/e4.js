/*

Tamara Montero Cano
10/10
Ejercicio 3 - Mumero primo
*/


const calculaFactorial = (numero) =>{

    let total = 1; 

	for (i=1; i<=numero; i++) {
		total = total * i; 
	}
	return total; 
    
}

let numero = parseInt(prompt('Indica un número'));

let resultado = calculaFactorial(numero);

alert ('El resultado es ' + resultado);

