import { Link } from 'react-router-dom';
import { siteConfig } from '@/data/siteConfig';
import { primaryNav } from '@/data/navigation';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <p className="footer__cta text-display-md">Let's build the next thing worth making.</p>
        </div>

        <div>
          <p className="text-label footer__col-title">Navigate</p>
          <nav className="footer__list" aria-label="Footer">
            {primaryNav.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-label footer__col-title">Connect</p>
          <div className="footer__list">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            {siteConfig.social.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="text-caption">
          © {year} {siteConfig.name}. Placeholder framework — no real client work shown.
        </p>
        <p className="text-caption">{siteConfig.location}</p>
      </div>
    </footer>
  );
}
