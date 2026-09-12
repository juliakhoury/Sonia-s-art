import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="nav">
        <div className="nav-left">
          <Link href="#shop">Shop</Link>
          <Link href="#">Originals</Link>
          <Link href="#story">Story</Link>
          <Link href="#">Contact</Link>
        </div>
        <Link href="/" className="wordmark">Sonia&rsquo;s Art</Link>
        <div className="nav-right">
          <button className="icon-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.6" y2="16.6" />
            </svg>
          </button>
          <button className="icon-btn" aria-label="Account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
            </svg>
          </button>
          <button className="icon-btn" aria-label="Cart" style={{ position: 'relative' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 8h12l-1 12H7L6 8z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            <span className="cart-count">2</span>
          </button>
        </div>
      </div>
    </header>
  );
}
