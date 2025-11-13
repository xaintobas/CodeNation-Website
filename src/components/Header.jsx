import { useState } from "react";
import { DarkLogo } from "./Logo.jsx";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Welcome", href: "/" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Learn", href: "/learn" },
    { name: "Connect", href: "/connect" },
  ];

  return (
    <header className="header">
      <nav className="container">
        <div className="nav-content">
          <DarkLogo />
          <div className="nav-links desktop-only">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </div>
          <button
            className="toggler"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Toggle
          </button>
        </div>
        <div
          className={
            isMenuOpen ? "mobile-nav-links mobile-only flex" : "hidden"
          }
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
