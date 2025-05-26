'use client';
import { useEffect, useState } from 'react';

const Testers = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/tests')
      .then(res => res.json())
      .then(setTests);
  }, []);

  return (
    <div className="main">
      <h1>Resultados de Testeo</h1>
      <ul>
        {tests.map((test: any) => (
          <li key={test.id}>
            Producto: {test.product_id}, Reacción: {test.reaction}, Sobrevivió: {test.survival_status ? 'Sí' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testers;
