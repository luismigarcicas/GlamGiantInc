'use client';
import { useEffect, useState } from 'react';
import './testers.css';

const Testers = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/product_tests')
      .then(res => res.json())
      .then(setTests);
  }, []);

  return (
    <div className="testers-container">
      <h1 className="testers-title">Clinical Tester Reports</h1>
      <div className="testers-list">
        {tests.map((test: any) => (
          <div className="test-card" key={test.id}>
            <div className="test-header">
              💋 {test.product?.name}
            </div>
            <div className="test-body">
              <p><span>Tester:</span> {test.tester?.name}</p>
              <p><span>Reaction:</span> {test.reaction}</p>
              <p><span>Survived:</span> {test.survival_status ? '✅ Yes' : '❌ No'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testers;
