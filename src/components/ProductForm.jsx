import {useState, useEffect} from 'react';

export const ProductForm = () => {
    const [producto, setProducto] = useState({
        id: '',
        descripcion: '',
        precioUnitario: 0,
        descuento: 0,
        stock: 0,
    });

    return (
        <form>
            <h2>"Agregar Producto"</h2>
            
            <label><input name="id" type="text" placeholder="ID"/></label>
        </form>
        )
}

export default ProductForm