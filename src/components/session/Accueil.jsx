import React, { useState, useEffect } from 'react';

const Accueil = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À propos" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header>
      {/* Barre de navigation principale */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="font-mono text-xl font-bold text-white">
              alberic<span className="text-blue-500">.dev</span>
            </a>

            {/* Bouton hamburger pour mobile */}
            <button
              className="md:hidden text-white text-2xl focus:outline-none z-50"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Ouvrir le menu"
            >
              ☰
            </button>

            {/* Menu desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay mobile (clic pour fermer) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Menu latéral mobile */}
      <aside
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-black/95 shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white text-3xl"
          onClick={closeMenu}
          aria-label="Fermer le menu"
        >
          &times;
        </button>
        <nav className="flex flex-col items-start mt-20 space-y-6 px-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white text-lg"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Pour éviter que le contenu soit caché sous le menu fixe */}
      <div className="pt-20" />
    </header>
  );
};

export default Accueil;
