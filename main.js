const callBackUrl = document.getElementById('CallBack');

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

const validarFormulario = (evento) => {
  evento.preventDefault();
  var usuario = document.getElementById('usuario').value;
  if (usuario.length == 0) {
    alert('No has escrito nada en el usuario');
    return;
  }
  this.submit();
}

const escribe = () => {
  escribir = document.getElementById('caja')
  minombre = '<p> Nombre: ' + document.rellenar.Nombre.value + '</p>'
  miapellido = '<p> Apellidos: ' + document.rellenar.Apellidos.value + '</p>'
  mifecha = '<p> Fecha de Nacimiento: ' + document.rellenar.Fecha.value + '</p>'
  midirrecion = '<p> Dirrecion: ' + document.rellenar.Dirrecion.value + '</p>'
  micodigo = '<p> Codigo Postal: ' + document.rellenar.Codigo.value + '</p>'
  miprovincia = '<p> Provincia: ' + document.rellenar.Provincia.value + '</p>'
  mimunicipio = '<p> Municipio: ' + document.rellenar.Municipio.value + '</p>'
  escribir.innerHTML = minombre + miapellido + mifecha + midirrecion + micodigo + miprovincia + mimunicipio;
  window.onload = function () {
    document.rellenar.ver.onclick = escribe
  }
}

const continuarPaso1 = () => {
  var paso1 = document.getElementById('paso1');
  var paso2 = document.getElementById('paso2');
  var paso3 = document.getElementById('paso3');
  var paso4 = document.getElementById('paso4');

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