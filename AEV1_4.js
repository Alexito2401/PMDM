var numero1 = 5;

var numero2 = 8;

document.write("Numero 1 =>"+numero1);
document.write("<br>");
document.write("Numero 2 =>"+numero2);
document.write("<br>");
document.write("<br>");

if (numero2 > numero1) {
    document.write("Numero 1 no es mayor a Numero 2");
    document.write("<br>");
}

if (numero2 >= 0) {
    document.write("Numero 2 es positivo");
    document.write("<br>");
}

if (numero1<=-1 ||numero1!= 0) {
    document.write("Numero 1 es negativo o distinto a cero");
    document.write("<br>"); 
} 

if (numero1+1 < numero2) {
    document.write("Incrementar en 1 unidad el valor de numero 1 no lo hace mayor o igual que Numero2");
    document.write("<br>");
}