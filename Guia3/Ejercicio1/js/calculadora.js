function iniciar() {
    var a, b, operacion, d, caso;
    var uno = document.getElementById('uno');
    uno.addEventListener("click", function () {
        //var accion = document.getElementById('calcu').innerHTML = uno.value;
        var accion = calcu.textContent = calcu.textContent + "1";
    })
    var dos = document.getElementById('dos');
    dos.addEventListener("click", function () {
        //var accion = document.getElementById('calcu').innerHTML = dos.value;
        var accion = calcu.textContent = calcu.textContent + "2";
    })
    var tres = document.getElementById('tres');
    tres.addEventListener("click", function () {
        //var accion = document.getElementById('calcu').innerHTML = tres.value;
        var accion = calcu.textContent = calcu.textContent + "3";
    })
    var cuatro = document.getElementById('cuatro');
    cuatro.addEventListener("click", function () {
        //var accion = document.getElementById('calcu').innerHTML = cuatro.value;
        var accion = calcu.textContent = calcu.textContent + "4";
    })
    var cinco = document.getElementById('cinco');
    cinco.addEventListener("click", function () {
        //var accion = document.getElementById('calcu').innerHTML = cinco.value;
        var accion = calcu.textContent = calcu.textContent + "5";
    })
    var seis = document.getElementById('seis');
    seis.addEventListener("click", function () {
        //var accion = document.getElementById('calcu').innerHTML = seis.value;
        var accion = calcu.textContent = calcu.textContent + "6";
    })
    var siete = document.getElementById('siete');
    siete.addEventListener("click", function () {
        //var accion = document.getElementById('calcu').innerHTML = siete.value;
        var accion = calcu.textContent = calcu.textContent + "7";
    })
    var ocho = document.getElementById('ocho');
    ocho.addEventListener("click", function () {
        //var accion = document.getElementById('calcu').innerHTML = ocho.value;
        var accion = calcu.textContent = calcu.textContent + "8";
    })
    var nueve = document.getElementById('nueve');
    nueve.addEventListener("click", function () {
        //var accion = document.getElementById('calcu').innerHTML = nueve.value;
        var accion = calcu.textContent = calcu.textContent + "9";
    })
    var cero = document.getElementById('cero');
    cero.addEventListener("click", function () {
        //var accion = document.getElementById('calcu').innerHTML = cero.value;
        var accion = calcu.textContent = calcu.textContent + "0";
    })
    var punto = document.getElementById('punto');
    punto.addEventListener("click", function () {
        var accion = calcu.textContent = calcu.textContent + ".";
    })
    var mc = document.getElementById('limpiar');
    mc.addEventListener("click", function () {
        limpiar();
    })
    var suma = document.getElementById('suma');
    suma.addEventListener("click", function () {
        a = calcu.textContent;
        operacion = "+";
        limpiar();
    })
    var resta = document.getElementById('resta');
    resta.addEventListener("click", function () {
        a = calcu.textContent;
        operacion = "-";
        limpiar();
    })
    var multiplicacion = document.getElementById('multiplicacion');
    multiplicacion.addEventListener("click", function () {
        a = calcu.textContent;
        operacion = "*";
        limpiar();
    })
    var division = document.getElementById('division');
    division.addEventListener("click", function () {
        a = calcu.textContent;
        operacion = "/";
        limpiar();
    })
    var igual = document.getElementById('igual');
    igual.addEventListener("click", function () {
        b = calcu.textContent;
        resolver();

    })
    var residuo = document.getElementById('residuo');
    residuo.addEventListener("click", function () {
        a = calcu.textContent;
        operacion = "%";
        limpiar();
    })
    var elevacion = document.getElementById('elevacion');
    elevacion.addEventListener("click", function () {
        d = calcu.textContent;
        caso = "^";
        especiales();
    })
    var raiz = document.getElementById('raiz');
    raiz.addEventListener("click", function () {
        d = calcu.textContent;
        caso = "1/";
        especiales();
    })
    var inversa = document.getElementById('inversa');
    inversa.addEventListener("click", function () {
        d = calcu.textContent;
        caso = "x-1";
        especiales();

    })
    function resolver() {
        var solucion;
        switch (operacion) {
            case "+":
                solucion = parseFloat(a) + parseFloat(b);
                break;
            case "-":
                if (isNaN(a)) {
                    alert('hola mundo');
                    calcu.textContent = "-";
                } else {
                    solucion = parseFloat(a) - parseFloat(b);
                }
                break;
            case "*":
                solucion = parseFloat(a) * parseFloat(b);
                break;
            case "/":
                solucion = parseFloat(a) / parseFloat(b);
                break;
            case "%":
                solucion = parseFloat(a) % parseFloat(b);
                break;
        }
        calcu.textContent = solucion;
    }
    function especiales() {
        var soluc;
        switch (caso) {
            case "^":
                soluc = Math.pow(d, 2);
                calcu.textContent = soluc;
                break;
            case "1/":
                soluc = Math.sqrt(d);
                calcu.textContent = soluc;
                break;
            case "x-1":
                soluc = (1 / d);
                calcu.textContent = soluc;
                break;
        }
    }
    function limpiar() {
        calcu.textContent = " ";
    }
}
window.onload = iniciar;