'use client';
import { useEffect, useState } from 'react';
import './clients.css';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(setClients);
  }, []);

  const getAvatarUrl = (name: string) => {
    return `https://robohash.org/${encodeURIComponent(name)}.png?set=set2`;
  };

  return (
    <div className="clients-container">
      <div className="clients-grid">
        {clients.map((client: any) => (
          <div className="client-card" key={client.id}>
            <img
              src={getAvatarUrl(client.name)}
              alt={client.name}
              className="client-avatar"
            />
            <div className="client-info">
              <h2>{client.name}</h2>
              <p><strong>Email:</strong> {client.email}</p>
              <p><strong>Role:</strong> {client.role}</p>
              <p><strong>Allergic Reactions:</strong> {client.allergic_reactions || 'None'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
