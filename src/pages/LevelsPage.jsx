import React from 'react'
import { useStudent } from '../StudentContext'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import LevelCard from '../components/LevelCard'
import '../styles/LevelsPage.css'

function LevelsPage() {
  const navigate = useNavigate()
  const { studentName } = useStudent()
  
  const handleAchievementsClick = () => {
    navigate('/achievements')
  }
  
  const handleChallengeClick = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    console.log('Challenge button clicked - navigating to /daily')
    try {
      navigate('/daily')
    } catch (err) {
      console.error('Navigation failed, using window.location:', err)
      window.location.href = '/dizzyultadv/daily'
    }
  }
  
  const levels = [
    {
      levelNumber: 1,
      title: "Journey begins",
      description: "Level 1"
    },
    {
      levelNumber: 2,
      subtitle: "HE HAUNTED",
      title: "Learning",
      description: "Level 2"
    },
    {
      levelNumber: 3,
      subtitle: "A MUCKY GREASE GUN",
      title: "ENTRANCE",
      description: "Level 3",
      extraText: "IDK man"
    },
    {
      levelNumber: 4,
      subtitle: "EMPTY POTION BOTTLE",
      title: "uhm why is it brown",
      description: "Level 4"
    },
    {
      levelNumber: 5,
      subtitle: "FREE ACME BIRD SEED",
      title: "THE MINE !",
      description: "Level 5",
      extraText: "Almost there!!"
    },
    {
      levelNumber: 67,
      subtitle: "THE GRAVEYARD KEY",
      title: "TS RIC",
      description: "Level 67",
      extraText: "What"
    }
  ]

  return (
    <div className="levels-page">
      <Header />
      
      <div className="levels-page-content">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">TAGS</h3>
            <div className="tags-container">
              <span className="tag">
                Yolkfolk
                <button className="tag-remove">×</button>
              </span>
              <span className="tag">
                Python
                <button className="tag-remove">×</button>
              </span>
              <span className="tag">
                Learn
                <button className="tag-remove">×</button>
              </span>
            </div>
          </div>

          <div className="sidebar-section">
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <div>
                <span>Daily level</span>
                <p className="checkbox-description">Description</p>
              </div>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <div>
                <span>My study</span>
                <p className="checkbox-description">Description</p>
              </div>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <div>
                <span>Checkpoint</span>
                <p className="checkbox-description">Description</p>
              </div>
            </label>
          </div>

          <div className="sidebar-section">
            <label className="slider-label">
              <span>Difficulty</span>
              <div className="slider-container">
                <input type="range" min="0" max="100" defaultValue="50" className="difficulty-slider" />
                <div className="slider-labels">
                  <span>0</span>
                  <span>100</span>
                </div>
              </div>
            </label>
          </div>

          <div className="sidebar-section">
            <label className="color-picker-label">
              <span>Color</span>
              <div className="color-picker-box"></div>
            </label>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="levels-main">
          {/* Top Navigation Bar */}
          <div className="top-nav-bar">
            <div className="search-container">
              <input type="text" placeholder="Search" className="search-input" />
              <span className="search-icon">🔍</span>
            </div>
            <div className="nav-buttons">
              <button 
                type="button" 
                className="nav-button challenge-button" 
                onClick={handleChallengeClick}
              >
                <span>✓</span> Challenge
              </button>
              <button type="button" className="nav-button">Levels completed</button>
              <button 
                type="button" 
                className="nav-button" 
                onClick={handleAchievementsClick}
              >
                Achievements
              </button>
              <button type="button" className="nav-button">Review</button>
            </div>
          </div>

          {/* Levels Grid */}
          <div className="levels-grid">
            {levels.map((level, index) => (
              <LevelCard
                key={index}
                levelNumber={level.levelNumber}
                title={level.title}
                subtitle={level.subtitle}
                description={level.description}
                extraText={level.extraText}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default LevelsPage

