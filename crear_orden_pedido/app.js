let productosPedido = [];

function agregarProductoPedido() {
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;

    if (!producto || !cantidad) {
        alert("Debe llenar todos los campos del producto");
        return;
    }

    productosPedido.push({ producto, cantidad });

    actualizarTablaProductosPedido();
    document.getElementById('producto').value = '';
    document.getElementById('cantidad').value = '';
}

function actualizarTablaProductosPedido() {
    const tabla = document.getElementById('cuerpo-tabla-productos-pedido');
    tabla.innerHTML = ''; // Limpiar la tabla antes de actualizar

    productosPedido.forEach((item, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${item.producto}</td>
            <td>${item.cantidad}</td>
            <td>
                <button onclick="eliminarProductoPedido(${index})">Eliminar</button>
            </td>
        `;
        tabla.appendChild(fila);
    });
}

function eliminarProductoPedido(index) {
    productosPedido.splice(index, 1);
    actualizarTablaProductosPedido();
}

function crearPedido() {
    const codigo = document.getElementById('codigo').value;
    const cliente = document.getElementById('cliente').value;

    if (!codigo || !cliente || productosPedido.length === 0) {
        alert("Debe llenar todos los campos y agregar al menos un producto");
        return;
    }

    const productosTexto = productosPedido.map(item => `${item.producto} (Cantidad: ${item.cantidad})`).join(', ');

    const tabla = document.getElementById('cuerpo-tabla-pedidos');
    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${codigo}</td>
        <td>${cliente}</td>
        <td>${productosTexto}</td>
    `;

    tabla.appendChild(fila);

    // Limpiar formulario y productos agregados
    document.getElementById('form-pedido').reset();
    productosPedido = [];
    actualizarTablaProductosPedido();
}
