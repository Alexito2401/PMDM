window.addEventListener('mouseover', function (evt) {
    // Si elemento tiene la clase `enlace`
    if (evt.target.classList.contains('text-container')) {
        evt.target.style.backgroundColor = 'deeppink';
        evt.target.style.fontWeight = 'Bold'
        evt.target.style.color = 'yellow'
    }
});

window.addEventListener('mouseout', function (evt) {
    // Si elemento tiene la clase `enlace`
    if (evt.target.classList.contains('text-container')) {
        evt.target.style.backgroundColor = 'white';
        evt.target.style.fontWeight = 'Normal'
        evt.target.style.color = 'black'
    }
});

const imagen = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg';

const moverArriba = () => {
    if ( document.getElementById('imagen2').innerHTML == "" && document.getElementById('imagen3').innerHTML != "") {
        document.getElementById('imagen2').innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' width='100'/>";
        document.getElementById('imagen3').innerHTML = "";
    } else if (document.getElementById('imagen1').innerHTML == ""){
        document.getElementById('imagen1').innerHTML="<img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' width='100'/>";
    document.getElementById('imagen2').innerHTML="";
    }
}

const moverAbajo = () => {
    if ( document.getElementById('imagen2').innerHTML == "" && document.getElementById('imagen1').innerHTML != "") {
        document.getElementById('imagen2').innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' width='100'/>";
        document.getElementById('imagen1').innerHTML = "";
    } else if (document.getElementById('imagen3').innerHTML == ""){
        document.getElementById('imagen3').innerHTML="<img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' width='100'/>";
    document.getElementById('imagen2').innerHTML="";
    }
}