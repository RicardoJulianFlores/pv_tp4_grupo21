import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Catalogo de Productos</h1>
      <div className="card">
        <button onClick={() => alert('agregado')}>
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
