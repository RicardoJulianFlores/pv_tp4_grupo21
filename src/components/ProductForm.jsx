import {useState, useEffect} from 'react';

export const ProductForm = ({onSubmit, editingProduct}) => {
    const [producto, setProducto] = useState({
        id: '',
        descripcion: '',
        precioUnitario: '',
        descuento: '',
        stock: '',
    });

    useEffect(() => {
        if (editingProduct){
            setProducto(editingProduct);
        }
    }, [editingProduct]);


    useEffect(() => {
        const precio = parseFloat(producto.precioUnitario);
        const descuento = parseFloat(producto.descuento);
        const precioConDescuento = precio - (precio * (descuento / 100));
        setProducto(prev => ({...prev, precioConDescuento: Number(precioConDescuento.toFixed(2))}));
    }, [producto.precioUnitario, producto.descuento]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto((prev) => ({...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!producto.id || !producto.descripcion) return; 
        onSubmit({...producto, precioUnitario: +producto.precioUnitario, descuento: +producto.descuento, stock: +producto.stock});
        setProducto({ id: '', descripcion: '', precioUnitario: '', descuento: '', stock: '' });
        };
      
    return (
        <form onSubmit={handleSubmit}>
            <h2>{editingProduct ? 'Editar Producto' : 'Agregar Producto' }</h2>
            <input name="id" value={producto.id} onChange={handleChange} placeholder="ID" disabled={!!editingProduct}/>
            <input name="descripcion" value={producto.descripcion} onChange={handleChange} placeholder="Descripcion" />
            <input name="precioUnitario" value={producto.precioUnitario} onChange={handleChange} placeholder="Precio Unitario" /> 
            <input name="descuento" type="number" value={producto.descuento} onChange={handleChange} placeholder="Descuento %" />
            <input name="stock" type="number" value={producto.stock} onChange={handleChange} placeholder="Stock" />
            <button type="submit">{editingProduct ? 'Actualizar' : 'Agregar'}</button>
        </form>
    );
};
export default ProductForm;
