const ProductItem = ({producto, borrar, editar}) => {
    return (
        <li style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem'}}>
            <strong>{producto.descripcion}</strong> (ID: {producto.id})<br/>
            Precio: ${producto.precioUnitario} - Descuento: {producto.descuento}%<br/>
            Precio con descuento: ${producto.precioConDescuento}<br/>
            Stock: {producto.stock}<br/>
            <button onClick={() => editar(producto)}>Editar</button>
            <button onClick={() => borrar(producto.id)}>Eliminar</button>
        </li>
    );
};

export default ProductItem;