function agregarInsumo() {
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const cantidad = document.getElementById('cantidad').value;
    const fecha = document.getElementById('fecha').value;

    const tabla = document.getElementById('cuerpo-tabla-insumos');
    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${codigo}</td>
        <td>${nombre}</td>
        <td>${cantidad}</td>
        <td>${fecha}</td>
    `;

    tabla.appendChild(fila);
}