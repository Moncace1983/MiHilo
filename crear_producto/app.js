let detallesProducto = [];

function agregarDetalle() {
    const detalle = document.getElementById('detalle').value;
    const valor = document.getElementById('valor').value;

    if (!detalle || !valor) {
        alert("Debe llenar todos los campos del detalle");
        return;
    }

    detallesProducto.push({ detalle, valor });

    actualizarTablaDetalles();
    document.getElementById('detalle').value = '';
    document.getElementById('valor').value = '';
}

function actualizarTablaDetalles() {
    const tabla = document.getElementById('cuerpo-tabla-detalles');
    tabla.innerHTML = ''; // Limpiar la tabla antes de actualizar

    detallesProducto.forEach((item, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${item.detalle}</td>
            <td>${item.valor}</td>
            <td>
                <button onclick="eliminarDetalle(${index})">Eliminar</button>
            </td>
        `;
        tabla.appendChild(fila);
    });
}

function eliminarDetalle(index) {
    detallesProducto.splice(index, 1);
    actualizarTablaDetalles();
}

function crearProducto() {
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;

    if (!codigo || !nombre || !descripcion || detallesProducto.length === 0) {
        alert("Debe llenar todos los campos y agregar al menos un detalle");
        return;
    }

    const detallesTexto = detallesProducto.map(item => `${item.detalle}: ${item.valor}`).join(', ');

    const tabla = document.getElementById('cuerpo-tabla-productos');
    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${codigo}</td>
        <td>${nombre}</td>
        <td>${descripcion}</td>
        <td>${detallesTexto}</td>
    `;

    tabla.appendChild(fila);

    // Limpiar formulario y detalles agregados
    document.getElementById('form-producto').reset();
    detallesProducto = [];
    actualizarTablaDetalles();
}
