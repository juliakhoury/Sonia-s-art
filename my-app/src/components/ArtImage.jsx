'use client';

import { useState } from 'react';

/**
 * Shows a CSS gradient as an immediate placeholder, then fades the real
 * <img> in on top once it loads. If the image 404s, the gradient stays
 * visible — but the failed request is still visible in the Network tab,
 * so broken paths aren't silently hidden during development.
 *
 * Props:
 *   src            - image path/URL
 *   alt            - alt text
 *   gradientClass  - optional gradient variant class from globals.css
 *                     (e.g. "p1", "hero-tone", "story-tone")
 */
export default function ArtImage({ src, alt, gradientClass = '' }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className={`art ${gradientClass}`}>
      {!errored && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={loaded ? 'loaded' : ''}
        />
      )}
    </div>
  );
}
