import React from 'react'
import '../styles/LevelCard.css'

function LevelCard({ levelNumber, title, subtitle, description, extraText }) {
  return (
    <div className="level-card">
      <div className="level-card-image">
        {/* Placeholder for level image */}
        <div className="level-image-placeholder"></div>
      </div>
      <div className="level-card-content">
        {subtitle && <p className="level-subtitle">{subtitle}</p>}
        <h3 className="level-title">{title}</h3>
        {levelNumber && <p className="level-number">Level {levelNumber}</p>}
        {description && <p className="level-description">{description}</p>}
        {extraText && <p className="level-extra-text">{extraText}</p>}
      </div>
    </div>
  )
}

export default LevelCard

