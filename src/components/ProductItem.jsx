const ProductItem = ({product, onDelete, onEdit}) => {
    return (
        <li style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem'}}>
            <strong>{product.descripcion}</strong> (ID: {product.id})<br/>
            Precio: ${product.precioUnitario} - Descuento: {product.descuento}%<br/>
            Precio con descuento: ${product.precioConDescuento}<br/>
            Stock: {product.stock}<br/>
            <button onClick={() => onEdit(product)}>Editar</button>
            <button onClick={() => onDelete(product.id)}>Eliminar</button>
        </li>
    );
};

export default ProductItem;