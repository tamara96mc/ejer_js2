/*

Tamara Montero Cano
10/10
Ejercicio e9
*/


const rellenaArray1 = (numeros, tamaño) => {

	for (let i = 0; i < tamaño; i++) {
	
		let numero =  (Math.floor(Math.random() * 9 + 0));
		// numeros[i] = numero;
		numeros.push(numero);
	}

}

const rellenaArray2 = (numeros, tamaño) => {

	for (let i = 0; i < tamaño; i++) {
	
		let numero =  (Math.floor(Math.random() * 9 + 0));
		// numeros[i] = numero;
		numeros.push(numero);
	}

}
const multiplicaArray = (array1, array2) => {

	let operacion = 0;

	for (let i = 0; i < array2.length; i++) {
	
		operacion = array1[i] * array2[i];
		console.log(array1[i] + '*' +array2[i] + '=' + operacion);
	}
}

let array1 = [];
let array2 = [];


let tamaño = parseInt(prompt('Indica el tamaño de los arrays:'));

rellenaArray1(array1, tamaño);
rellenaArray2(array2, tamaño);
multiplicaArray(array1, array2);





