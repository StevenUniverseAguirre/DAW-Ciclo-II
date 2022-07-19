var num = new Array;
var impar = 0;
var par = 0;
var sumt = 0;
var mayor = new Array;
var menor = new Array;
var sum = 0, sumn = 0, sumt = 0;
var max, i, contenido = "", j = 0, k = 0;
do {
    max = prompt("Digite un número entero", "");
    continue;
} while (isNaN(num));
var datos = document.getElementById('dato');

with (document) {
    //contenido += "<h1>Hola mundo</h1>\n";
    for (i = 0; i < max; i++) {
        //num[i];
        if (i % 2 == 0) {
            j++;
            par = par + i;
        }
        if (i % 2 == 1) {
            k++;
            impar = impar + i;
        }
        sumt = sumt + i;
    }

    contenido += "<h1>El número ingresado es: " + max + " </h1>";
    contenido += "<h1>La cantidad de cifras son: " + i + "</h1>";
    contenido += "<h1>La cantidad de cifras impares son: " + k + "</h1>";
    contenido += "<h1>La cantidad de cifras pares son: " + j + "</h1>";
    contenido += "<h1>La suma de cifras impares es: " + impar + "</h1>";
    contenido += "<h1>La suma de cifras pares es: " + par + "</h1>";
    contenido += "<h1>La suma de todas las cifras es: " + sumt + "</h1>";
    contenido += "<h1>La cifra menor  es: 1 </h1>";
    contenido += "<h1>La cifra mayor  es: " + max + "</h1>";

}
datos.innerHTML = contenido;
