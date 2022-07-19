var producto = new Array();
var precio = new Array();
var opcion, max, i = 0;
var bandera = false, bandera1 = false;

do {
    producto[i] = prompt("Escriba el nombre del producto", "");
    if (isNaN(producto)) {
        bandera == false;
    } else {
        bandera == true;
    }
} while (bandera == false);
do {
    precio[i] = prompt("Escriba el nombre del producto", "");
    if (isNaN(producto)) {
        bandera1 == false;
    } else {
        bandera1 == true;
    }
} while (bandera1 == false);
if (bandera == true && bandera1 == true) {
    opcion = (parseInt(prompt("Digite 1-Si desea agregar otro producto, 2-Si desea salir")));
    switch (opcion) {
        case 1:
            break;
        case 2:
            break;
        default:

    }
}
