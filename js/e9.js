/*

Tamara Montero Cano
10/10
Ejercicio e9
*/


const rellenaArray = (numeros) => {

	let numero = parseInt(prompt('Indica el tamaño del array:'));

	for (let i = 0; i < numero; i++) {
	
		let numero =  (Math.floor(Math.random() * 9 + 0));
		// numeros[i] = numero;
		numeros.push(numero);
	}

}

const MuestraArray = (numeros) => {

	let suma= 0;

	for (let i = 0; i < numeros.length; i++) {
	
		console.log('Número: ' + numeros[i]);
		suma += numeros[i];
	}

	alert('La suma es' + suma + ' unidades')

}

let numeros = [];

rellenaArray(numeros);
MuestraArray(numeros);




