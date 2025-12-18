import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import '../App.css'

function WelcomePage() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Login submitted - navigating to PROFILE page, NOT levels')
    // Force navigation to profile page
    try {
      navigate('/profile')
    } catch (error) {
      console.error('Navigation error:', error)
      window.location.href = '/dizzyultadv/profile'
    }
  }

  return (
    <div className="app">
      <Header />
      
      {/* Main Content Section */}
      <main className="main-content">
        <div className="welcome-container">
          <h2 className="welcome-title">WELCOME</h2>
          <p className="welcome-subtitle">Please log into your student account!</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              className="email-input" 
              defaultValue="tuke.fei.sk@gmail.com"
            />
            <button 
              type="submit" 
              className="submit-button"
              onClick={(e) => {
                e.preventDefault()
                handleSubmit(e)
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default WelcomePage

