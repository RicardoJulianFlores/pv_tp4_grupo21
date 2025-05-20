import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import { ProductList } from './components/ProductList.jsx';
import { Formulario } from './components/ProductForm.jsx';
import { SearchBar } from './components/SearchBar.jsx';

function App() {
  const [catalogo, setCatalogo] = useState([]);
  const [productoEditar, setproductoEditar] = useState(null);
  const [buscado, setbuscado] = useState('');

  const agregar = useCallback((producto) => {
    setCatalogo(prev => [...prev, producto]);
  }, []);

  const actualizar = useCallback((productoActualizado) => {
    setCatalogo(prev => 
      prev.map(p => (p.id === productoActualizado.id ? productoActualizado : p))
    );
  }, []);

  const borrar = useCallback((id) => {
    setCatalogo(prev => prev.filter(producto => producto.id !== id));
  }, []);

  const handleAddOrUpdate = useCallback((producto) => {
    const existe = catalogo.find(p => p.id === producto.id);
    if (existe) {
      actualizar(producto);
    } else {
      agregar(producto);
    }
    setproductoEditar(null);
  },[catalogo, agregar, actualizar]);

  const handleEdit = useCallback((producto) => {
    setproductoEditar(producto);
  }, []);

  const productosFiltrados = useMemo(() => {
    return catalogo.filter(producto =>
      producto.descripcion.toLowerCase().includes(buscado.toLowerCase()) ||
      producto.id.includes(buscado)
    );
  }, [catalogo, buscado]);

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <Formulario onSubmit={handleAddOrUpdate} editingProduct={productoEditar} />
      <SearchBar value={buscado} onChange={setbuscado} />
      <ProductList productos={productosFiltrados} editar={handleEdit} borrar={borrar} />
    </div>
  );
};

export default App
