function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('.content-section');
    secciones.forEach(function(section) {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    var selectedSection = document.getElementById(seccion);
    selectedSection.classList.add('active');

    // Resaltar el enlace activo
    var enlaces = document.querySelectorAll('.menu-item');
    enlaces.forEach(function(enlace) {
        enlace.classList.remove('active');
    });
    document.querySelector(`a[onclick="mostrarSeccion('${seccion}')"]`).classList.add('active');
}
