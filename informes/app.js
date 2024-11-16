const inventario = [
    { codigo: '001', nombre: 'Tela Algodón', tipo: 'insumo', cantidad: 100 },
    { codigo: '002', nombre: 'Hilo Rojo', tipo: 'insumo', cantidad: 200 },
    { codigo: '003', nombre: 'Camisa Básica', tipo: 'producto', cantidad: 50 },
    { codigo: '004', nombre: 'Pantalón Formal', tipo: 'producto', cantidad: 30 },
    { codigo: '005', nombre: 'Pedido Cliente X', tipo: 'pedido', cantidad: 20 },
    { codigo: '006', nombre: 'Pedido Cliente Y', tipo: 'pedido', cantidad: 10 }
];

function generarInforme() {
    const tipoInforme = document.getElementById('tipo-informe').value;
    const tabla = document.getElementById('cuerpo-tabla-informe');
    tabla.innerHTML = ''; // Limpiar la tabla antes de actualizar

    const datosFiltrados = inventario.filter(item => 
        (tipoInforme === 'insumos' && item.tipo === 'insumo') ||
        (tipoInforme === 'productos' && item.tipo === 'producto') ||
        (tipoInforme === 'pedidos' && item.tipo === 'pedido')
    );

    datosFiltrados.forEach((item) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${item.codigo}</td>
            <td>${item.nombre}</td>
            <td>${item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1)}</td>
            <td>${item.cantidad}</td>
        `;
        tabla.appendChild(fila);
    });
}

function exportarCSV() {
    const filas = document.querySelectorAll('#cuerpo-tabla-informe tr');
    let csvContent = "data:text/csv;charset=utf-8,Código,Nombre,Tipo,Cantidad\n";

    filas.forEach(fila => {
        const columnas = fila.querySelectorAll('td');
        const datos = Array.from(columnas).map(columna => columna.textContent);
        csvContent += datos.join(",") + "\n";
    });

    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', 'informe_inventario.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Cargar el informe inicial al cargar la página
document.addEventListener('DOMContentLoaded', generarInforme);
