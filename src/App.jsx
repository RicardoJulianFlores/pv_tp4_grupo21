import { useState } from 'react'
import './App.css'
import { AgregarProducto } from './components/ProductForm.jsx'

function App() {
  return (
    <>
      <h1>Catalogo de Productos</h1>
        <AgregarProducto/>
      <div className="card">
        <button onClick={() => alert('agregado') }>
          Agregar un Producto
        </button>
        <button onClick={() => alert('encontrado')}>
          Buscar un Producto
        </button>
        <button onClick={() => alert('modificado')}>
          Modificar un Producto
        </button>
        <button onClick={() => alert('eliminado')}>
          Eliminar un Producto
        </button>
      </div>
    </>
  )
}

export default App
