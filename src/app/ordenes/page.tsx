'use client';
import { useEffect, useState } from 'react';

const Ordenes = () => {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/ordenes')
      .then(res => res.json())
      .then(setOrdenes);
  }, []);

  return (
    <div className="main">
      <h1>Órdenes</h1>
      <ul>
        {ordenes.map((orden: any) => (
          <li key={orden.id}>
            Cliente ID: {orden.client_id} - Total: ${orden.total_amount} - Estado: {orden.payment_status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ordenes;
