/*

Tamara Montero Cano
10/10
Ejercicio e9
*/


const getPrimes = (min, max) => {
	const result = Array(max + 1)
		.fill(0)
		.map((_, i) => i);

	for (let i = 2; i <= Math.sqrt(max + 1); i++) {
		for (let j = i ** 2; j < max + 1; j += i) delete result[j];
	}

	return Object.values(result.slice(Math.max(min, 2)));
};

const getRandNum = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandPrime = (min, max) => {
	const primes = getPrimes(min, max);
	return primes[getRandNum(0, primes.length - 1)];
};



const arrayRandom = (array1 ,tamaño, inicial, final) => {

	for (let i = 0; i < tamaño; i++) {

		array1.push(getRandPrime(inicial, final));
	
	}
}

const randomMayor = (array1) => {

	let mayor= 0

	for (let i = 0; i < array1.length; i++) {

		if(array1[i]>array1[i+1]){

			mayor= array1[i];
		}
	}

	console.log('Los valores son' , array1);
	console.log('El mayor es ' + mayor);
}


let array1 = [];

let tamaño = parseInt(prompt('Indica el tamaño de los arrays:'));

let inicial = parseInt(prompt('Rango inicial'));

let final = parseInt(prompt('Rango final'));

arrayRandom(array1, tamaño, inicial ,final);
randomMayor(array1);






