import {useState, useEffect} from 'react';

export const Formulario = ({onSubmit,productoEditar}) => {
    const [producto, setProducto] = useState({
        id: '',
        descripcion: '',
        precioUnitario: '',
        descuento: '',
        stock: '',
    });

    useEffect(() => {
        if (productoEditar){
            setProducto(productoEditar);
        }
    }, [productoEditar]);


    useEffect(() => {
        const precio = parseFloat(producto.precioUnitario);
        const descuento = parseFloat(producto.descuento);
        const precioConDescuento = precio - (precio * (descuento / 100));
        setProducto(prev => ({...prev, precioConDescuento: Number(precioConDescuento.toFixed(2))}));
    }, [producto.precioUnitario, producto.descuento]);

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setProducto((prev) => ({...prev, [name]: value }));
    };

    const enviarFomulario = (e) => {
        e.preventDefault();
        if (!producto.id || !producto.descripcion || producto.precioUnitario || !producto.stock || !producto.descuento) {alert("Falta completar todas las casillas"); 
        return;}
        onSubmit({...producto, precioUnitario: +producto.precioUnitario, descuento: +producto.descuento, stock: +producto.stock});
        setProducto({ id: '', descripcion: '', precioUnitario: '', descuento: '', stock: '' });
        };
      
    return (
        <form onSubmit={enviarFomulario}>
            <h2>{productoEditar ? 'Editar Producto' : 'Agregar Producto' }</h2>
            <input name="id" value={producto.id} onChange={manejarCambio} placeholder="ID" disabled={!!productoEditar}/>
            <input name="descripcion" value={producto.descripcion} onChange={manejarCambio} placeholder="Descripcion" />
            <input name="precioUnitario" value={producto.precioUnitario} onChange={manejarCambio} placeholder="Precio Unitario" /> 
            <input name="descuento" type="number" value={producto.descuento} onChange={manejarCambio} placeholder="Descuento %" />
            <input name="stock" type="number" value={producto.stock} onChange={manejarCambio} placeholder="Stock" />
            <button type="submit">{productoEditar ? 'Actualizar' : 'Agregar'}</button>
        </form>
    );
};
export default Formulario;
