/*

Tamara Montero Cano
10/10
Ejercicio e7 - 
*/


const calculaMoneda = (numero, moneda) => {

	let cambio = 0

	switch (moneda) {
		case 'dolares':
			cambio = parseFloat(numero * 1.16);
			break;
		case 'yenes':
			cambio = parseFloat(numero * 129.92);
			break;
		case 'libras':
			cambio = parseFloat(numero * 0.85);
			break;
		default:
			break;
	}

	return cambio;

}

let numero = parseInt(prompt('Indica la cantidad de euros:'));
let moneda = prompt('Indica dolares, yenes o libras:');


let resultado = calculaMoneda(numero, moneda);

alert('Son ' + resultado + ' ' + moneda);

