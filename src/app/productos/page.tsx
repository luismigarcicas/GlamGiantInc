'use client';
import { useEffect, useState } from 'react';
import './products.css';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/makeup_products')
      .then(res => res.json())
      .then(setProductos);
  }, []);

  return (
    <div className="productos-container">
      <h1 className="productos-title">Our Products</h1>
      <div className="productos-grid">
        {productos.map((producto: any) => (
          <div className="producto-card" key={producto.id}>
            <div className="producto-header">
              {producto.name}
            </div>
            <div className="producto-body">
              <p><span>Category:</span> {producto.category}</p>
              <p><span>Stock:</span> {producto.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
