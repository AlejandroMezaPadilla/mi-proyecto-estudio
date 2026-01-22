import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Itzel Olgin</h2>

      <div>
        <Link to="/">Inicio</Link>
        <Link to="/galeria">Galería</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
}
