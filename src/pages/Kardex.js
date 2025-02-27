import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/Kardex.css';

const Kardex = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('descripcion');

  useEffect(() => {
    // Fetch initial data from the database (placeholder URL)
    fetch('http://localhost:5000/api/kardex')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching Kardex data:', error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search submit logic if needed
    console.log("Searching for:", searchTerm, "by", filterBy);
  };

  const filteredItems = items.filter(item => {
    if (filterBy === 'descripcion') {
      return item.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return item.id.toString().includes(searchTerm);
    }
  });

  return (
    <div className="kardex-container">
      <h2>Kardex</h2>
      <form className="search-bar-kardex" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder={`Buscar por ${filterBy}`}
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={filterBy} onChange={handleFilterChange}>
          <option value="descripcion">Descripción</option>
          <option value="id">Codigo</option>
        </select>
        <button type="submit" className="search-button-kardex">
          <FaSearch />
        </button>
      </form>
      <table className="kardex-table">
        <thead>
          <tr>
            <th>Ítem</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Precio Total</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.descripcion}</td>
              <td>{item.cantidad}</td>
              <td>{item.precioUnitario}</td>
              <td>{item.precioTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Kardex;

