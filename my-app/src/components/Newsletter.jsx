'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    // TODO: replace with a real request to your email provider / API route
    setSubmitted(true);
  }

  return (
    <section className="newsletter">
      <div className="wrap">
        <div>
          <h2 className="display">Join the collectors list</h2>
          <p>
            One email when a new piece is finished, plus 10% off your first painting. No
            schedule, no spam.
          </p>
        </div>

        {submitted ? (
          <p style={{ color: '#cfd9cf', fontSize: 14.5 }}>Thanks — check your inbox to confirm.</p>
        ) : (
          <form className="nform" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
