// src/app/layout.tsx
import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GlamGiantInc',
  description: 'Small in size, but our glamour makes up for it',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/productos">Products</Link>
            <Link href="/testers">Testers</Link>
            <Link href="/clientes">Clients</Link>
            <Link href="/ordenes">Orders</Link>
          </nav>
        </header>

        <main className="main">
          {children}
        </main>

        <footer className="footer">
          © 2025 GlamGiantInc. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
