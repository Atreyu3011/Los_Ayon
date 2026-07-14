'use client';

import { useEffect, useState } from 'react';

const links = [
  ['proyecto', 'El proyecto'],
  ['lotes', 'Lotes'],
  ['amenidades', 'Amenidades'],
  ['galeria', 'Galería'],
  ['ubicacion', 'Ubicación']
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-lock', open);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('nav-lock');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <a href="#inicio" className="brand" aria-label="Terrenos Frente al Río, inicio">
        <img src="/brand/mark.svg" alt="" width="50" height="50" />
        <span>
          <strong>Terrenos</strong>
          <small>Frente al Río</small>
        </span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav className={open ? 'is-open' : ''} aria-label="Navegación principal">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-cta"
          href="https://wa.me/526684195973?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Terrenos%20Frente%20al%20R%C3%ADo."
          target="_blank"
          rel="noreferrer"
        >
          Solicitar información
        </a>
      </nav>
    </header>
  );
}
