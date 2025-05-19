import React, {useState, useEffect} from "react";

export const agregarProducto = ()=> {
    const nuevoProducto = {id: id ,descripcion: descripcion, precioUnitario: precioUnitario, descuento: descuento, stock: stock ,precioConDescuento: precioUnitario*(1-descuento/100) };
   
return (
    <div class="card">
        <h2>Producto Agregado</h2>
        <p>Id: ${nuevoProducto.id}</p>
        <p>Descripcion: ${nuevoProducto.descripcion}</p>
        <p>Precio Unitario: ${nuevoProducto.precioUnitario}</p>
        <p>Descuento: ${nuevoProducto.descuento}</p>
        <p>Stock: ${nuevoProducto.stock}</p>
        <p>Precio con Descuento: ${nuevoProducto.precioConDescuento}</p>
    </div>
    )
};

export default agregarProducto;