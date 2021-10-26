import React from 'react';

const subtitle = ['No fees.', 'No minimum deposit.', 'High interest rates.'];

export default function Hero() {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        {subtitle.map((subtitle, index) => (
          <p key={index} className="subtitle">
            {subtitle}
          </p>
        ))}
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}
