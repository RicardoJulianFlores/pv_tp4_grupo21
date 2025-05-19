import React from 'react'

export const AgregarProducto = () => {
    const descuento = 21;
    const precioUnitario = 21;
    const nuevoProducto = {id: 1 ,descripcion: "nashe", precioUnitario: precioUnitario, descuento: descuento, stock: 21 ,precioConDescuento: precioUnitario*(1-descuento/100) };
    return (
        <div>
        <h2>Producto Agregado</h2>
        <p>Id: ${nuevoProducto.id}</p>
        <p>Descripcion: ${nuevoProducto.descripcion}</p>
        <p>Precio Unitario: ${nuevoProducto.precioUnitario}</p>
        <p>Descuento: ${nuevoProducto.descuento}</p>
        <p>Stock: ${nuevoProducto.stock}</p>
        <p>Precio con Descuento: ${nuevoProducto.precioConDescuento}</p>
        </div>
        )
}

export default AgregarProducto