/*

Tamara Montero Cano
10/10
Ejercicio e9
*/


const rellenaArray1 = (numeros, tamaño) => {

	for (let i = 0; i < tamaño; i++) {

		let numero = (Math.floor(Math.random() * 300 + 1));
		// numeros[i] = numero;
		numeros.push(numero);
	}

}


const multiplicaArray = (array1) => {

	let numero = parseInt(prompt('Dígito a buscar'));

	let arrayResult = [];

	let lastChar = '';
	
	for (let i = 0; i < array1.length; i++) {

		lastChar = array1[i].toString().slice(-1); 

		if (lastChar == numero){
			arrayResult.push(array1[i]);
		}
		
	}

	console.log('Los números que finalizan por el dígito son: ' , arrayResult);

}

let array1 = [];

let tamaño = parseInt(prompt('Indica el tamaño de los arrays:'));

rellenaArray1(array1, tamaño);
multiplicaArray(array1);



