document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir la acción predeterminada del formulario

    let usuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;

    if (usuario === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Lógica de autenticación (simulación)
    if (usuario === "admin" && password === "12345") {
        location.href="/menu_nuevo"
        alert("Bienvenido al sistema.");
        // Redireccionar al dashboard u otra página
    } else {
        alert("Usuario o contraseña incorrecto.");
    }
});