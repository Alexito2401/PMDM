function ElegirNumero(){
    var a, b;
    a=prompt('Numero 1');
    a=Number(a);
    return a
    }

    function mostrarparImpar(){
        var num = ElegirNumero();
        if (num % 2 == 0) {
            alert("El numero es par");
        }
        else if(typeof(num) == string){
            alert("Has introducido letras")
        }else{
            alert("El numero es impar");
        } 
        }
    