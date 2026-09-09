import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Link to="/" className="logo">
          CODE<span>STARS</span>
        </Link>

        <p>
          Learn. Compete. Build.
        </p>
      </div>

      <div className="footer-links">
        <a
          href="https://www.instagram.com/djsce.codestars/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram ↗
        </a>

        <a
          href="https://www.linkedin.com/company/djs-codestars/posts/?feedView=all"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="footer-bottom">
        <span>© 2026 DJS CodeStars</span>
        <span>Built by developers.</span>
      </div>
    </footer>
  );
}

export default Footer;