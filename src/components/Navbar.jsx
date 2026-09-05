// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo">
//         CODE<span>STARS</span>
//       </Link>

//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/events">Events</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//       </div>

//       <Link to="/contact" className="nav-button">
//         Join Us →
//       </Link>
//     </nav>
//   );
// }

// export default Navbar;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
// // const [menuOpen, setMenuOpen] = useState(false);

// // It creates a piece of state.

// // false → menu closed
// // true  → menu open
//   function closeMenu() {
//     setMenuOpen(false);
//   }

//   return (
//     <nav className="navbar">

//       <Link to="/" className="logo" onClick={closeMenu}>
//         CODE<span>STARS</span>
//       </Link>

//       <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
//         <Link to="/" onClick={closeMenu}>Home</Link>
//         <Link to="/events" onClick={closeMenu}>Events</Link>
//         <Link to="/about" onClick={closeMenu}>About</Link>
//         <Link to="/contact" onClick={closeMenu}>Contact</Link>
//       </div>

//       <Link to="/contact" className="nav-button">
//         Join Us →
//       </Link>

//       <button
//         className="menu-button"
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Toggle navigation menu"
//       >
//         {menuOpen ? <X size={22} /> : <Menu size={22} />}
//       </button>

//     </nav>
//   );
// }

// export default Navbar;

//For active navbar, we are writing this code

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
      </div>

      <Link to="/contact" className="nav-button">
        Join Us →
      </Link>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

    </nav>
  );
}

export default Navbar;