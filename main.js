window.addEventListener("load", function() {
    miformulario.codigo.addEventListener("keypress", soloNumeros, false);
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