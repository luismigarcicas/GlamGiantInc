'use client';
import './ProductoCard.css';

interface Producto {
  name: string;
  category: string;
  stock: number;
  durability_score: number;
}

const ProductoCard = ({ producto }: { producto: Producto }) => {
  return (
    <div className="producto-card">
      <h3>{producto.name}</h3>
      <p>Categoría: {producto.category}</p>
      <p>Stock: {producto.stock}</p>
      <p>Durabilidad: {producto.durability_score}/10</p>
    </div>
  );
};

export default ProductoCard;
