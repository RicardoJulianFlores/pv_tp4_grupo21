export const inicializarLista = (data) => {
    const tbody = document.querySelector('#catalogo tbody');
    tbody.innerHTML = '';
    data.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precioUnitario}</td>
            <td>${producto.descuento}</td>
            <td>${producto.precioConDescuento}</td>
            <td>${producto.stock}</td>
        `;
        tbody.appendChild(row);
    });
};