import React from 'react';
import { homeData } from '../services/data';

export default function Feature() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {homeData.map((item) => (
        <div key={item.id} className="feature-item">
          <img src={item.icon} alt={item.alt} className="feature-icon"/>
          <h3>{item.title}</h3>
          <p>{item.paragraph}</p>
        </div>
      ))}
    </section>
  );
}
