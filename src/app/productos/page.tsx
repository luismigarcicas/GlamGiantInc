'use client';
import { useEffect, useState } from 'react';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/productos')
      .then(res => res.json())
      .then(setProductos);
  }, []);

  return (
    <div className="main">
      <h1>Productos</h1>
      <ul>
        {productos.map((producto: any) => (
          <li key={producto.id}>
            <strong>{producto.name}</strong> ({producto.category}) - Stock: {producto.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
