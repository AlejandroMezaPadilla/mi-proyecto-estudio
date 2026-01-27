import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>Itzel Olgin</h2>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Menú"
      >
        ☰
      </button>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
        <Link to="/galeria" onClick={() => setOpen(false)}>Galería</Link>
        <Link to="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;
