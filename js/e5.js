/*

Tamara Montero Cano
10/10
Ejercicio 3 - Mumero primo
*/


const calculaBinario = (numero) => {

	const resultado = numero.toString(2);

	return resultado;

}

let numero = parseInt(prompt('Indica un número'));

let resultado = calculaBinario(numero);

alert('El resultado es ' + resultado);

