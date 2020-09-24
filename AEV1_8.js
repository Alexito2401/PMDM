function PedirNumero() {
    var a;
    a=prompt('Elige un numero entre 1 y 12');
    a=Number(a);
    
    while (a > 12 || a <1) {
        alert("El numero no es valido, vuelve a elegir");
                a=prompt('Elige un numero entre 1 y 12');
                a=Number(a);
    }
    return a
}

function tirarDado() {
    var num = PedirNumero();
    var aleatorio = Math.round(Math.random()*12);


    if (num == aleatorio) {
        console.log("Felicitaciones, has acertado");
        
        document.write("<input type='button' value='Actualizar' onclick='location.reload()'/>");
    } else {
        console.log("Vaya, intentalo de nuevo");
        
        document.write("<input type='button' value='Actualizar' onclick='location.reload()'/>");

    }

}