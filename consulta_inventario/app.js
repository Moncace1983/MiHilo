const inventario = [
    { codigo: '001', nombre: 'Tela Algodón', tipo: 'insumo', cantidad: 100 },
    { codigo: '002', nombre: 'Hilo Rojo', tipo: 'insumo', cantidad: 200 },
    { codigo: '003', nombre: 'Camisa Básica', tipo: 'producto', cantidad: 50 },
    { codigo: '004', nombre: 'Pantalón Formal', tipo: 'producto', cantidad: 30 }
];

function cargarInventario(tipo = 'todos') {
    const tabla = document.getElementById('cuerpo-tabla-inventario');
    tabla.innerHTML = ''; // Limpiar la tabla antes de actualizar

    let inventarioFiltrado = inventario;
    if (tipo !== 'todos') {
        inventarioFiltrado = inventario.filter(item => item.tipo === tipo);
    }

    inventarioFiltrado.forEach((item) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${item.codigo}</td>
            <td>${item.nombre}</td>
            <td>${item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1)}</td>
            <td>${item.cantidad}</td>
            <td>
                <button onclick="verDetalle('${item.codigo}')">Ver</button>
                <button onclick="editarInventario('${item.codigo}')">Editar</button>
            </td>
        `;
        tabla.appendChild(fila);
    });
}

function consultarInventario() {
    const tipoSeleccionado = document.getElementById('tipo-inventario').value;
    cargarInventario(tipoSeleccionado);
}

function buscarInventario() {
    const valorBusqueda = document.getElementById('buscador').value.toLowerCase();
    const tabla = document.getElementById('cuerpo-tabla-inventario');
    tabla.innerHTML = ''; // Limpiar la tabla antes de agregar los elementos filtrados

    const resultadosFiltrados = inventario.filter(item => 
        item.nombre.toLowerCase().includes(valorBusqueda) ||
        item.codigo.toLowerCase().includes(valorBusqueda)
    );

    resultadosFiltrados.forEach((item) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${item.codigo}</td>
            <td>${item.nombre}</td>
            <td>${item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1)}</td>
            <td>${item.cantidad}</td>
            <td>
                <button onclick="verDetalle('${item.codigo}')">Ver</button>
                <button onclick="editarInventario('${item.codigo}')">Editar</button>
            </td>
        `;
        tabla.appendChild(fila);
    });
}

function verDetalle(codigo) {
    alert(`Detalle del inventario para el código: ${codigo}`);
}

function editarInventario(codigo) {
    alert(`Editar inventario para el código: ${codigo}`);
}

// Cargar todos los elementos del inventario al cargar la página
document.addEventListener('DOMContentLoaded', () => cargarInventario());
