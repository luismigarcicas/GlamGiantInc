'use client';
import './OrdenCard.css';

interface Orden {
  client_id: string;
  total_amount: number;
  payment_status: string;
}

const OrdenCard = ({ orden }: { orden: Orden }) => {
  return (
    <div className="orden-card">
      <p>Cliente ID: {orden.client_id}</p>
      <p>Total: ${orden.total_amount}</p>
      <p>Estado: {orden.payment_status}</p>
    </div>
  );
};

export default OrdenCard;
