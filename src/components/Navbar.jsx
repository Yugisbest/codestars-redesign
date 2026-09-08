import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        CODE<span>STARS</span>
      </Link>

      <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/events" onClick={closeMenu}>
          Events
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

        <NavLink to="/profile" onClick={closeMenu}>
          Profile
        </NavLink>

        <NavLink to="/leaderboard" onClick={closeMenu}>
          Leaderboard
        </NavLink>
      </div>

      <Link to="/contact" className="nav-button">
        Join Us
        <span>→</span>
      </Link>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
    </nav>
  );
}

export default Navbar;