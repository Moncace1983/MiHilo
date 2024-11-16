function cambiarContraseña() {
    const contraseñaActual = document.getElementById('contraseña-actual').value;
    const nuevaContraseña = document.getElementById('nueva-contraseña').value;
    const confirmarContraseña = document.getElementById('confirmar-contraseña').value;

    // Expresión regular para validar la contraseña (mínimo 8 caracteres, una letra mayúscula, un carácter especial)
    const regexContraseña = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!nuevaContraseña.match(regexContraseña)) {
        alert("La nueva contraseña debe tener al menos 8 caracteres, una letra mayúscula y un carácter especial.");
        return;
    }

    if (nuevaContraseña !== confirmarContraseña) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    alert("Contraseña cambiada exitosamente.");
    document.getElementById('form-cambio-contraseña').reset();
}


function crearUsuario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const nombreUsuario = document.getElementById('nombre-usuario').value;
    const password = document.getElementById('password').value;

    if (nombre && email && password) {
        alert(`Usuario ${nombre} creado exitosamente.`);
        document.getElementById('form-crear-usuario').reset();
    } else {
        alert("Por favor, complete todos los campos");
    }
}

function ingresarAdministrador() {
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    if (usuario === "admin" && password === "admin123") {
        alert("Ingreso exitoso como administrador");
        window.location.href = "admin-dashboard.html"; // Redireccionar al dashboard del administrador
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
