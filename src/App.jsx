import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import { ProductList } from './components/ProductList.jsx';
import { ProductForm } from './components/ProductForm.jsx';
import { SearchBar } from './components/SearchBar.jsx';

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log("Productos actualizados:", products);
  }, [products]);

  const addProduct = useCallback((product) => {
    setProducts(prev => [...prev, product]);
  }, []);

  const updateProduct = useCallback((updatedProduct) => {
    setProducts(prev => 
      prev.map(p => (p.id === updatedProduct.id ? updatedProduct : product))
    );
  }, []);

  const deleteProduct = useCallback((id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  }, []);

  const handleAddOrUpdate = useCallback((product) => {
    const exists = products.find(p => p.id === product.id);
    if (exists) {
      updateProduct(product);
    } else {
      addProduct(product);
    }
    setEditingProduct(null);
  },[products, addProduct, updateProduct]);

  const handleEdit = useCallback((product) => {
    setEditingProduct(product);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      p.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.includes(searchTerm)
    );
  }, [products, searchTerm]);

  return (
    <div style={{padding: "2rem", maxWidth: "800px", margin: "auto"}}>
      <h1>Gestión de Productos</h1>
      <ProductForm onSubmit={handleAddOrUpdate} editingProduct={editingProduct} />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <ProductList products={filteredProducts} onEdit={handleEdit} onDelete={deleteProduct} />
    </div>
  );
};

export default App
