var ascendentes = new Array();
var max, contenido = "", temp;
function voto() {
    do {
        max = prompt("Ingrese la cantidad de numeros a ordenar");
        if (isNaN(max)) {
            alert("No es número");
        }
        continue;

    } while (max < 2 || isNaN(max));
}
var eleccion = prompt("¿De que forma desea ver el orden?, ascendente o descendente", "");
switch (eleccion) {
    case "ascendente":
    case "Ascendente":
        voto();
        for (i = 0; i < max; i++) {
            ascendentes[i] = parseInt(prompt("Número " + (parseInt(i) + 1), ""));
        }
        var dato = document.getElementById('datos');
        with (document) {
            contenido += "<h1>Listado de números</h1>";
            contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";

            for (i = 0; i < max; i++) {
                contenido += "\t\t\t<td>" + ascendentes[i] + "</td>\n";
            }
            contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
            for (i = 0; i < max - 1; i++) {
                for (j = i + 1; j < max; j++) {
                    if (ascendentes[i] > ascendentes[j]) {
                        temp = ascendentes[j];
                        ascendentes[j] = ascendentes[i];
                        ascendentes[i] = temp;
                    }
                }
            }
            contenido += "<h1>Listado de números ascendentes:</h1>\n";


            for (i = 0; i < max; i++) {
                contenido += "\t\t\t<td>" + ascendentes[i] + "</td>\n";
            }
            contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        }


        dato.innerHTML = contenido;

        break;
    case "descendente":
    case "Descendente":
        voto();
        for (i = 0; i < max; i++) {
            ascendentes[i] = parseInt(prompt("Número " + (parseInt(i) + 1), ""));
        }
        var dato = document.getElementById('datos');
        with (document) {
            contenido += "<h1>Listado de números</h1>";
            contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
            for (i = 0; i < max; i++) {
                contenido += "\t\t\t<td>" + ascendentes[i] + "</td>\n";
            }
            contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
            for (i = 0; i < max - 1; i++) {
                for (j = i + 1; j < max; j++) {
                    if (ascendentes[i] < ascendentes[j]) {
                        temp = ascendentes[j];
                        ascendentes[j] = ascendentes[i];
                        ascendentes[i] = temp;
                    }
                }
            }
            contenido += "<h1>Listado de números descendentes:</h1>";

            contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
            for (i = 0; i < max; i++) {
                contenido += "\t\t\t<td>" + ascendentes[i] + "</td>\n";
            }
            contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        }


        dato.innerHTML = contenido;
        break;
    default:
        document.write("Error, datos invalidos");
}
