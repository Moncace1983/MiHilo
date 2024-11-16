let productosAgregados = [];

function agregarProducto() {
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;

    if (!producto || !cantidad) {
        alert("Debe llenar todos los campos del producto");
    }

    productosAgregados.push({ producto, cantidad });

    actualizarTablaProductos();
    document.getElementById('producto').value = '';
    document.getElementById('cantidad').value = '';
}

function actualizarTablaProductos() {
    const tabla = document.getElementById('cuerpo-tabla-productos');
    tabla.innerHTML = ''; // Limpiar la tabla antes de actualizar

    productosAgregados.forEach((item, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${item.producto}</td>
            <td>${item.cantidad}</td>
            <td>
                <button onclick="eliminarProducto(${index})">Eliminar</button>
            </td>
        `;
        tabla.appendChild(fila);
    });
}

function eliminarProducto(index) {
    productosAgregados.splice(index, 1);
    actualizarTablaProductos();
}

function crearOrdenCompra() {
    const codigo = document.getElementById('codigo').value;
    const proveedor = document.getElementById('proveedor').value;

    if (!codigo || !proveedor || productosAgregados.length === 0) {
        alert("Debe llenar todos los campos y agregar al menos un producto");
        return;
    }

    const productosTexto = productosAgregados.map(item => `${item.producto} (Cantidad: ${item.cantidad})`).join(', ');

    const tabla = document.getElementById('cuerpo-tabla-ordenes');
    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${codigo}</td>
        <td>${proveedor}</td>
        <td>${productosTexto}</td>
    `;

    tabla.appendChild(fila);

    // Limpiar formulario y productos agregados
    document.getElementById('form-orden-compra').reset();
    productosAgregados = [];
    actualizarTablaProductos();
}
