'use client';
import { useEffect, useState } from 'react';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(setClientes);
  }, []);

  return (
    <div className="main">
      <h1>Clientes</h1>
      <ul>
        {clientes.map((c: any) => (
          <li key={c.id}>
            {c.name} - {c.email} - Rol: {c.role} - Reacciones: {c.allergic_reactions || 'Ninguna'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clientes;
