import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <span className="logo">🛒 ListaFácil</span>
      <nav>
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/lista">Minha lista</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
    </header>
  );
}
