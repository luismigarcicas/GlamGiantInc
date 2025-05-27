'use client';
import { useEffect, useState } from 'react';
import './orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/orders_and_transactions')
      .then(res => res.json())
      .then(setOrders);
  }, []);

  return (
    <div className="orders-container">
      <h1 className="orders-title">Orders</h1>
      <div className="orders-list">
        {orders.map((order: any) => (
          <div className="order-card" key={order.id}>
            <div className="client-info">
              <h2>{order.client?.name}</h2>
              <p>{order.client?.email}</p>
              <p><strong>Total:</strong> ${order.total_amount}</p>
              <p><strong>Status:</strong> {order.payment_status}</p>
            </div>
            <div className="order-id-box">
              <span>Order ID</span>
              <div className="order-id">#{order.id}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
