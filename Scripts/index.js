
/*
*   Autor: Ignacio Carmona
*   Github: https://github.com/IgnacioCG28/simulacro-Examen-101023.git
*/
const longitud = document.getElementById("longitud");
const ancho = document.getElementById("ancho");
const button = document.getElementById("button");
const blank1 = document.getElementById("blank1");
const blank2 = document.getElementById("blank2");


button.addEventListener('click',operacion);

function operacion() {
    let resultadoA = Math.pow(parseFloat(longitud.value), 2);
    blank1.innerText = 'Área del rectángulo: ' + resultadoA;
    let resultadoB = 2 * (parseFloat(longitud.value) + parseFloat(ancho.value));
    blank2.innerText = 'Perímetro del rectángulo: ' + resultadoB;
}