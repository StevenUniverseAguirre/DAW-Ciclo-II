//function inicio(){
    var num = new Array;
    var impar = new Array;
    var par = new Array;
    var mayor = new Array;
    var menor = new Array;
    var sum=0, sumn=0, sumt=0;
    var max, i, contenido="", j=0, k=0;
    do{
        max = prompt("Digite un número entero", "");
        continue;
    }while(isNaN(num));
    var datos = document.getElementById('dato');

    with (document){
        //contenido += "<h1>Hola mundo</h1>\n";
        for(i=0; i<max; i++){
            num[i];
            if(i%2 == 0){
                j++;
            }
            if(i%2 == 1){
                k++;
                //sumn += impar[i];
                //impar[k];
            }
        }
    
        for(i=0; i<max-1; i++){
            for(m=i+1; m<max; m++){
                if(num[i]>max[m]){
                    mayor[i];
                }
                //if(num)
            }
        }
        //sumt += num[i];
        contenido += "<h1>El número ingresado es: "+max+" </h1>";
        contenido += "<h1>La cantidad de cifras son: "+i+"</h1>";
        contenido += "<h1>La cantidad de cifras impares son: "+ k +"</h1>";
        contenido += "<h1>La cantidad de cifras pares son: "+ j +"</h1>";
        contenido += "<h1>La suma de cifras impares es: "+ sumn +"</h1>";
        contenido += "<h1>La suma de cifras pares es: "+ sum +"</h1>";
        contenido += "<h1>La suma de todas las cifras es: "+sumt+"</h1>";
        contenido += "<h1>La cifra mayor  es: "+mayor+"</h1>";
        contenido += "<h1>La cifra menor  es: "+mayor+"</h1>";
    
    }
    datos.innerHTML = contenido;
    

    

    

//}

