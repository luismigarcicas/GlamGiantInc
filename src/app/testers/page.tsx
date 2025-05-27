'use client';
import { useEffect, useState } from 'react';

const Testers = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/product_tests')
      .then(res => res.json())
      .then(setTests);
  }, []);

  return (
    <div className="main">
      <h1>Tester results</h1>
      <ul>
        {tests.map((test: any) => (
          <li key={test.id}>
            Tester: {test.tester?.name} <br />
            Product: {test.product?.name} <br />
            Reaction: {test.reaction} <br />
            Survived: {test.survival_status ? 'Sí' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testers;
