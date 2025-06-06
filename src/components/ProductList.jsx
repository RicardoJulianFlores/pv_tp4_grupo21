import React from 'react'
import ProductItem from './ProductItem.jsx'
export const ProductList = ({productos, borrar, editar}) => {
    return (
        <div>
            <h1>Catalogo de productos</h1>
            <ul>
                {productos.map(producto => (
                    <ProductItem key={producto.id} producto={producto} borrar={borrar} editar={editar} />
                ))}
            </ul>
        </div>
    )
};

export default ProductList;