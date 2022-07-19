function init(){
    var celsius = prompt("Digite la temperatura en grados celsius:","");
    var resultado;

    if(celsius<0)
    {
        var mensaje = "No se aceptan numeros negativos";
        close();
    }
    else
    {
        resultado = celsius*(9/5) + 32;
        var mensaje = celsius + " Celsius son: "+resultado+" en grados Farenheit";
    }
    var mostrar = document.getElementById('temperatura');
    mostrar.innerHTML = '<h3>'+mensaje+'</h3>'

}
window.onload = init;