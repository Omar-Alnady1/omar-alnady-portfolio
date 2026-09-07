import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { primaryNav } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';
import './Navbar.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <header className={`navbar ${scrolled || open ? 'is-scrolled' : ''}`}>
        <Link to="/" className="navbar__mark" aria-label={`${siteConfig.name} — home`}>
          {siteConfig.name.split(' ')[0]} <span>{siteConfig.name.split(' ')[1] ?? ''}</span>
        </Link>

        <nav className="navbar__links" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`navbar__link ${isActive(item.path) ? 'is-active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>

      <nav
        id="mobile-nav"
        className={`navbar__mobile ${open ? 'is-open' : ''}`}
        aria-label="Mobile"
        aria-hidden={!open}
      >
        {primaryNav.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            tabIndex={open ? 0 : -1}
            className={`navbar__mobile-link ${isActive(item.path) ? 'is-active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
