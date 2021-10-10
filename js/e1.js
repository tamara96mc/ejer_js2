/*

Tamara Montero Cano
10/10
Ejercicio 1
*/

const areaCirculo = () => {

    let radio = parseInt(prompt('Radio'));

    let resultado = (radio^2)* Math.PI;

    alert('El área del circulo ' + resultado + ' unidades.');

}

const areaTriangulo = () => {

    let base = parseInt(prompt('Base'));
    let altura = parseInt(prompt('Altura'));

    let resultado = (base * altura) / 2;

    alert('El área del triangulo ' + resultado + ' unidades.');
    
}

const areaCuadrado = () => {

    let lado = parseInt(prompt('lado'));

    let resultado = lado * lado;

    alert('El área de un cuadrado ' + resultado + ' unidades.');
    
}


let figura = prompt("¿Que fígura eliges? Circulo/Triangulo/Cuadrado");


switch (figura) {
    case 'Circulo':
        areaCirculo();
        break;
    case 'Triangulo':
        areaTriangulo();
        break;
    case 'Cuadrado':
        areaCuadrado();
        break;
    default:
        break;
}



