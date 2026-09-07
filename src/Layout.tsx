import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export function Layout() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
