import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/WaitlistPage.css'

// Image assets from Figma
const imgHeader = "https://www.figma.com/api/mcp/asset/c8cc38ee-76a2-4421-8f9f-d58a89817729"
const imgHeroNewsletter = "https://www.figma.com/api/mcp/asset/09fba22e-c57a-40de-b236-19d4f32d7a65"
const imgFigma = "https://www.figma.com/api/mcp/asset/840861c4-2eeb-44a3-a210-0fe392bf9095"
const imgXLogo = "https://www.figma.com/api/mcp/asset/e337bfe5-a442-45f3-8e6b-3063ea5f2a04"
const imgLogoInstagram = "https://www.figma.com/api/mcp/asset/e00ff84b-cd4f-4f60-b915-fa916eee0e34"
const imgLogoYouTube = "https://www.figma.com/api/mcp/asset/5b2b8f78-d16d-4a80-a376-634604e56e0d"
const imgLinkedIn = "https://www.figma.com/api/mcp/asset/f22a6149-c726-4e9e-b972-4035b012692a"

function SubmitButton({ className = "" }) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <button
      type="submit"
      className={`waitlist-button ${isHovering ? 'hover' : 'default'} ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      Submit
    </button>
  )
}

export default function WaitlistPage() {
  const [email, setEmail] = useState('tuke.fei.sk@gmail.com')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Signup with email:', email)
    navigate('/profile')
  }

  return (
    <div className="waitlist-container">
      {/* Header Section */}
      <div className="waitlist-header" style={{margin:'0',padding:'0'}}>
        <div className="waitlist-header-text">
          <span className="waitlist-header-title">Dizzy Adventure</span>
          <span className="waitlist-header-subtitle">Rewind the old. Study the new.</span>
        </div>
      </div>

      {/* Navigation Pill List */}
      <div className="waitlist-nav-pills">
      </div>

      {/* Hero Newsletter Section */}
      <div className="waitlist-hero-section">
        <img alt="Background" className="waitlist-hero-background" src="/dizzyultadv/images/backgroundforest.PNG" />

        <div className="waitlist-text-content" style={{ position: 'static', top: 'unset', left: 'unset', transform: 'none', marginBottom: '32px' }}>
          <h1 className="waitlist-title">WELCOME</h1>
          <h2 className="waitlist-subtitle">Please log into your student account!</h2>
        </div>

        {/* Newsletter Form */}
        <form className="waitlist-form" onSubmit={handleSubmit}>
          <div className="waitlist-input-wrapper">
            <input
              type="email"
              className="waitlist-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
          </div>
          <SubmitButton />
        </form>
      </div>

      {/* Footer removed per request */}
    </div>
  )
}
