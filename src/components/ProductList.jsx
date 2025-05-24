import React from 'react'
import ProductItem from './ProductItem.jsx'
export const ProductList = ({productos, borrar, editar}) => {
    return (
        <ul>
            {productos.map(producto => (
                <ProductItem key={producto.id} producto={producto} borrar={borrar} editar={editar} />
            ))}
        </ul>
    )
};

export default ProductList;