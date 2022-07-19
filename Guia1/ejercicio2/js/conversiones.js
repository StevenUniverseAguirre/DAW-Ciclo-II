function init(){
    var pies = 3.28;
    var pulgadas = 38.37;
    var yardas = 1.09;
    var numConver = prompt("Digite la cantidad de metros que desea convertir");
    var conversiones = document.getElementById('conversiones');
    var resultados = document.getElementById('resultados');
    var contenido = "<header>\n";
    contenido += "\t<h1></h1>\n";
    contenido += "</header>\n";
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Conversion a pies</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Conversion a pulgadas</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Conversion a yardas</span></a>\n";
    contenido += "</li>\n";
    contenido += "</ul>\n";
    contenido += "</nav>\n";

    conversiones.innerHTML = contenido;
    var opciones = document.getElementsByTagName('a');
    for(var i=0; i<opciones.length; i++){
        switch(i){
            case 0: 
            opciones[i].onclick = function(){
                resultados.innerHTML = (parseFloat(numConver) * parseFloat(pies)); 
            }
            break;
            case 1:
            opciones[i].onclick = function(){
                resultados.innerHTML = (parseFloat(numConver) * parseFloat(pulgadas));
            }
            break;
            case 2:
            opciones[i].onclick = function(){
                resultados.innerHTML = (parseFloat(numConver) * parseFloat(yardas));
            }
            break;
            /*case 3:
            opciones[i].onclick = function(){
                if(numConver == 0){
                    resultados.innerHTML = "<p>Error, no se puede convertir 0 metros..</p>";
                }
            }
            break;*/
            

        }
    }



}
window.onload = init;