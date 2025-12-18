import React, { useState } from 'react'
import '../styles/Achievement.css'

function Achievement({ title, description, image }) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div
      className={`achievement-card ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      <div className="achievement-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="achievement-image-placeholder" />
        )}
      </div>
      <div className="achievement-content">
        <h3 className="achievement-title">{isClicked ? 'Achievement Unlocked!' : title}</h3>
        <p className="achievement-description">
          {isClicked ? 'Congratulations! You earned this achievement.' : description}
        </p>
      </div>
    </div>
  )
}

export default Achievement

