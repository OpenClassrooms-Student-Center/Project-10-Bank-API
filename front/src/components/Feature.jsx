import React from 'react'

export default function feature({icon, alt, title, text}) {
  return (
    <div>
        <div className="feature-item">
          <img src={icon} alt={alt} className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>{text}</p>
        </div>
    </div>
  )
}