import ArtImage from './ArtImage';

export default function Hero() {
  return (
    <section className="hero">
      <ArtImage src="/images/hero.jpg" alt="Featured painting, Cold Front" gradientClass="hero-tone" />
      <div className="hero-content">
        <h1>Paintings that hold onto a moment longer than a photograph could.</h1>
        <p>
          Original, one-of-a-kind work from a small studio in New Jersey — each piece made
          slowly, by hand, and sold once.
        </p>
        <a href="#shop" className="btn light">
          View the collection
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      <div className="plate">
        <span className="num">07 / 12</span>
        <span>Cold Front, 2026 — oil on linen</span>
      </div>
    </section>
  );
}
