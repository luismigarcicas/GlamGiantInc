'use client';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link href="/">Inicio</Link>
      <Link href="/productos">Productos</Link>
      <Link href="/testers">Testers</Link>
      <Link href="/clientes">Clientes</Link>
      <Link href="/ordenes">Órdenes</Link>
      <Link href="/auth/login">Login</Link>
    </nav>
  );
};

export default Navbar;
