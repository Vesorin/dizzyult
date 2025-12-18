import React from 'react'
import { useStudent } from '../StudentContext'
import { useNavigate } from 'react-router-dom'
import Achievement from '../components/Achievement'
import '../styles/AchievementsPage.css'

// Figma asset for achievement image
const imgAchievement = 'https://www.figma.com/api/mcp/asset/6a470174-efae-4fba-92fd-3ce2355b087b'

function AchievementsPage() {
  const navigate = useNavigate()
  const { studentName } = useStudent()

  const handleBackClick = () => {
    navigate('/shop')
  }

  const achievements = [
    {
      title: "Great success!",
      description: "10% of users reached this milestone.",
      image: imgAchievement
    },
    {
      title: "Great success!",
      description: "10% of users reached this milestone.",
      image: imgAchievement
    },
    {
      title: "Great success!",
      description: "10% of users reached this milestone.",
      image: imgAchievement
    }
  ]

  return (
    <div className="achievements-page">
      {/* Top Navigation Bar */}
      <div className="achievements-header">
        {/* header image removed, background handled by CSS */}
        <div className="achievements-header-left">
          <button className="back-button" onClick={handleBackClick}>
            <span className="back-icon">★</span>
          </button>
          <div className="header-user-info">
            <h2 className="user-name">{studentName}</h2>
            <p className="user-role">Student profile</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="achievements-main">
        <div className="achievements-titles">
          <h1 className="achievements-main-title">Achievements</h1>
          <p className="achievements-subtitle">Your biggest success!</p>
        </div>

        <div className="achievements-container">
          {achievements.map((achievement, index) => (
            <Achievement
              key={index}
              title={achievement.title}
              description={achievement.description}
              image={achievement.image}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default AchievementsPage

