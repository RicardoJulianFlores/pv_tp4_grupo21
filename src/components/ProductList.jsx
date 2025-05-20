import React from 'react'
import ProductItem from './ProductItem.jsx'
export const ProductList = ( {products, onDelete, onEdit}) => {
    return (
        <ul>
            {products.map(product => (
                <ProductItem key={products.id} product={product} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </ul>
    )
};

export default ProductList;