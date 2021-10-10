/*

Tamara Montero Cano
10/10
Ejercicio e8 - 
*/






const rellenaArray = (numeros) => {

	for (let i = 0; i < 10; i++) {
	
		let numero = parseInt(prompt('Indica número:'));
		// numeros[i] = numero;
		numeros.push(numero);
	}

}

const MuestraArray = (numeros) => {

	for (let i = 0; i < numeros.length; i++) {
	
		console.log('Número: ' + numeros[i]);
		
	}

}

let numeros = [];

rellenaArray(numeros);
MuestraArray(numeros);




