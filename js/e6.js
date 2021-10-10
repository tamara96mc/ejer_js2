/*

Tamara Montero Cano
10/10
Ejercicio 3 - Mumero primo
*/


const calculaCifras = (numero) => {

	const resultado = numero.toString().length;

	return resultado;

}

let numero = parseInt(prompt('Indica un número'));

let resultado = calculaCifras(numero);

alert('El resultado es ' + resultado);

