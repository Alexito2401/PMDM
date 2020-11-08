const callBAck = document.getElementsByName("CallBack");

const validarCall = () =>{
  if (callBAck.values === "") {
      
  }
}


window.addEventListener("load", function() {
  rellenar.codigo.addEventListener("keypress", soloNumeros, false);
});

//Solo permite introducir numeros.
function soloNumeros(e){
  var key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57) {
    e.preventDefault();
  }
}

  function mayus(e) {
    e.value = e.value.toUpperCase();
}

function pregunta(){
  if (confirm('¿Estas seguro de enviar este formulario?')){
     document.miformulario.submit()
  }
}

function escribe() {
  escribir = document.getElementById("caja")
  minombre ="<p> Nombre: " + document.rellenar.Nombre.value + "</p>"
  miapellido = "<p> Apellidos: " + document.rellenar.Apellidos.value + "</p>"
  mifecha = "<p> Fecha de Nacimiento: " + document.rellenar.Fecha.value + "</p>"
  midirrecion = "<p> Dirrecion: " + document.rellenar.Dirrecion.value + "</p>"
  micodigo = "<p> Codigo Postal: " + document.rellenar.codigo.value + "</p>"
  miprovincia = "<p> Provincia: " + document.rellenar.Provincia.value + "</p>"
  mimunicipio = "<p> Municipio: " + document.rellenar.Municipio.value + "</p>"


  escribir.innerHTML = minombre + miapellido + mifecha + midirrecion+ micodigo+ miprovincia+ mimunicipio;
  }
window.onload = function() {
document.rellenar.ver.onclick = escribe
} 
