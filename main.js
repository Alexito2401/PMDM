//validar si la callback esta vacia
const validarCall = () => {
  //obteniendo el valor que se puso en campo text del formulario
  const callBack = document.getElementById('CallBack').value;
  //la condición
  if (callBack.length === 0) {
    alert('La CallBack URL esta vacia');
  } else {
    document.getElementById('continuar1').style.display = 'block';
  }
}

window.addEventListener('load', function () {
  rellenar.Codigo.addEventListener('keypress', soloNumeros, false);
});

//Solo permite introducir numeros.
const soloNumeros = (e) => {
  let key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57) {
    e.preventDefault();
  }
}

const mayus = (e) => {
  e.value = e.value.toUpperCase();
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('rellenar').addEventListener('submit', validarFormulario);
});

function Comprobar() {
  let nombre = document.getElementById('Nombre').value;
  let apellido = document.getElementById('Apellidos').value;
  let fecha = document.getElementById('Fecha').value;
  let codigo = document.getElementById('Codigo').value;
  let provincia = document.getElementById('Provincia').value;
  let municipio = document.getElementById('Municipio').value;

  if (nombre.length == 0) {
    return false;
  }
  if (apellido.length == 0) {
    return false;
  }
  if (fecha.length == 0) {
    return false;
  }
  if (codigo.length == 0) {
    return false;
  }
  if (provincia.length == 0) {
    return false;
  }
  if (municipio.length == 0) {
    return false;
  }
  return true;
}

const pregunta = () => {
  if (Comprobar()){
    if (confirm("Son los datos introducidos correctos?")) {
      document.getElementById('continuar2').style.display = 'block';
      return true;
    }
    else {
      return false;
    }
  } else{
    alert('No se ha completado la informacion');
  }
}

function obtenerDatos(){
  let nom = document.getElementById("Nombre").value;
  let ape = document.getElementById("Apellidos").value;
  let fec = document.getElementById("Fecha").value;
  let dir = document.getElementById("Dirrecion").value;
  let cod = document.getElementById("Codigo").value;
  let pro = document.getElementById("Provincia").value;
  let mun = document.getElementById("Municipio").value;

  let div = document.getElementById("caja");

  let formulario = [nom,ape,fec,dir,cod,pro,mun];

  formulario.forEach(element => {
    div.innerHTML = '<p>'+element+'</p>'
  });
}

const mostrarFormulario = () =>{
  escribir = document.getElementById("caja")
  miTitulo = "<p>" + document.rellenar.Nombre.value + "</p>"
  miClave = "<p>" + document.rellenar.Apellido.value + "</p>"
  miTexto = "<p>" + document.rellenar.Fecha.value + "</p>"
  escribir.innerHTML = miTitulo + miClave + miTexto
  }
window.onload = function() {
document.rellenar.ver.onclick = escribe
}

const mostrarCallback = () =>{
  let call = document.getElementById("CallBack").value;
  var callBack = document.getElementById('CallBack_Paso4');
  callBack.innerHTML = call;
}

const continuarPaso1 = () => {
  var paso1 = document.getElementById('paso1');
  var paso2 = document.getElementById('paso2');

  if (paso2.style.display !== "none") {
    paso2.style.display = "inline";
    paso1.style.display = "none";
  }
}

const continuarPaso2 = () => {
  var paso2 = document.getElementById('paso2');
  var paso3 = document.getElementById('paso3');

  if (paso3.style.display !== "none") {
    paso3.style.display = "inline";
    paso2.style.display = "none";
  }
}

const continuarPaso3 = () => {
  var paso3 = document.getElementById('paso3');
  var paso4 = document.getElementById('paso4');

  if (paso4.style.display !== "none") {
    paso4.style.display = "inline";
    paso3.style.display = "none";
  }
}