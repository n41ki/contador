let contador = 0;

function actualizarContador() {
    const contadorTexto = document.getElementById('contador-texto');
    contadorTexto.textContent = contador;
    contadorTexto.classList.add('explosion');
    setTimeout(() => {
        contadorTexto.classList.remove('explosion');
    }, 500);
}

function sumar() {
    contador++;
    actualizarContador();
}

function restar() {
    contador--;
    actualizarContador();
}

// Guardar el valor al cerrar la página
window.onbeforeunload = function() {
    localStorage.setItem('contador', contador);
}

// Cargar el valor guardado al abrir la página
window.onload = function() {
    const valorGuardado = localStorage.getItem('contador');
    if (valorGuardado !== null) {
        contador = parseInt(valorGuardado);
        actualizarContador();
    }
}
