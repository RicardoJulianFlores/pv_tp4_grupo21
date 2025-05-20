import {useState, useEffect} from 'react';

export const Formulario = () => {
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
            
            <label><imput name="id" type="text" placeholder="ID" value={id} /></label>
        </form>
        )
}

export default AgregarProducto