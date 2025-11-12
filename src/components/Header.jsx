import { useState } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Welcome",
      href: "/",
    },
    {
      name: "Who We Are",
      href: "/who-we-are",
    },
    {
      name: "What We Do",
      href: "/what-we-do",
    },
    {
      name: "Learn",
      href: "/learn",
    },
    {
      name: "Connect",
      href: "/connect",
    },
  ];

  return (
    <header className="header">
      <nav className="container">
        <div className="nav-content">
          {/* <img src="" alt="" /> */}
          <p className="logo">CodeNation</p>
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
            isMenuOpen ? "block nav-links mobile-only flex" : "hidden flex"
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
