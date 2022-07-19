var producto = new Array(30);
var precio = new Array;
var opcion, max;
var bandera = false, bandera1 = false;

do{
    producto = prompt("Escriba el nombre del producto","");
    if(isNaN(producto)){
        bandera == false;
    }else{
        bandera == true;
        precio == prompt("Escribe el precio del producto");
        if(isNaN(precio)){
            bandera1 == false;
        }
    }
}while(bandera == false && bandera1 == false);
    
if(bandera == true && bandera1 == true){
    document.write("Hola");
}

































