'use client';
import { useEffect, useState } from 'react';

const Ordenes = () => {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/orders_and_transactions')
      .then(res => res.json())
      .then(setOrdenes);
  }, []);

  return (
    <div className="main">
      <h1>Orders</h1>
      <ul>
        {ordenes.map((orden: any) => (
          <li key={orden.id}>
            ID: {orden.client_id} - Total: ${orden.total_amount} - Status: {orden.payment_status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ordenes;
