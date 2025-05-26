'use client';
import './ClienteCard.css';

interface Cliente {
  name: string;
  email: string;
  role: string;
  allergic_reactions?: string;
}

const ClienteCard = ({ cliente }: { cliente: Cliente }) => {
  return (
    <div className="cliente-card">
      <h3>{cliente.name}</h3>
      <p>Email: {cliente.email}</p>
      <p>Rol: {cliente.role}</p>
      <p>Reacciones: {cliente.allergic_reactions || 'Ninguna'}</p>
    </div>
  );
};

export default ClienteCard;
