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