function verificacion() {

    var checkboxes = document.getElementsByName('checbox');
    var button = document.getElementById('boton');

    if (button.value == 'select') {
        for (var i in checkboxes) {
            checkboxes[i].checked = 'FALSE';
        }
        button.value = 'deselect'
        return button.value
    } else {
        for (var i in checkboxes) {
            checkboxes[i].checked = '';
        }
        button.value = 'select';
        return button.value
    }
}

var estado = 1;

function changeImg() {
    var imagen = document.getElementById('imagen');
    var valor = verificacion();

    if (valor == "select") {
        if (estado == 1) {
            imagen.src = "imagen2.png";
            estado = 0;
        } else {
            imagen.src = "imagen1.png";
            estado = 1;
        }
    } else {
        alert("Imagen no selecionada")
    }

}


function changeColor(x)
{
    if(x.style.background=="rgb(247, 211, 88)")
    {
        x.style.background="#fff";
    }else{
        x.style.background="#F7D358";
    }
    return false;
}

