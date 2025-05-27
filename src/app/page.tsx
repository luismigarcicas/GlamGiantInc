'use client';
import './HomeStyle/Home.css';

export default function HomePage() {
  return (
    <div className="home-background-full">
      <h1 className="glam-logo">
        ✨ GlamGiant Inc. 💄
      </h1>
      <p className="glam-slogan">
        Small in size, but our glamour makes up for it
      </p>
      <hr className="glam-divider" />
      <p className="glam-text">
        Welcome to the empire of indestructible makeup. Our products defy gravity, judgment, and time itself. 
      </p>
      <p className="glam-text">
        Browse our latest collections, witness scientific madness, and discover the elite behind the empire.
      </p>
    </div>
  );
}
