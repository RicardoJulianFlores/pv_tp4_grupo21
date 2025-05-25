import React from 'react';
export const SearchBar = ({ value, onChange }) => {
  const manejarCambio = (e) => {
    onChange(e.target.value);
  };
  const limpiarBusqueda = () => {
    onChange('');
  };
  return (
    <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
      <input
        type="text"
        placeholder="Buscar por ID o desc."
        value={value}
        onChange={manejarCambio}
        style={{ padding: '0.5rem', flex: 1 }}
      />
      {value && (
        <button onClick={limpiarBusqueda} style={{ padding: '0.5rem' }}>
          Limpiar
        </button>
      )}
    </div>
  );
};
export default SearchBar;
