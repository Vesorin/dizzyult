import React, { useState, useEffect } from 'react'
import { useStudent } from '../StudentContext'
import { useNavigate } from 'react-router-dom'
import '../styles/ProfilePage.css'


function ProfilePage() {
  const navigate = useNavigate()
  const { studentName, setStudentName } = useStudent()

  const handleBackClick = () => {
    navigate('/shop')
  }

  const handleLogout = () => {
    navigate('/waitlist')
  }

  const [isEditing, setIsEditing] = useState(false)
  const [localName, setLocalName] = useState(studentName)
  const [bioFirst, setBioFirst] = useState(
    'NS is a first-year IT student who has just started learning Python. Curious about how software actually works, NS spends a lot of time experimenting with small scripts and debugging simple programs. Right now they are focused on understanding variables, conditions, loops, and basic problem solving. NS goal is to build a solid foundation in programming to move on to web development and more complex projects later.'
  )
  const [bioSecond, setBioSecond] = useState(
    'NS is especially interested in how Python can be used for automation and data processing, and is beginning to read about libraries like math and random, with an eye toward eventually using more advanced tools. At the moment, their main focus is writing clear, readable code and learning how to break larger problems into smaller, logical steps. Over time, Alex wants to build enough confidence in Python to contribute to team projects and understand the foundations needed for future work in areas like web development or software engineering.'
  )

  const [infoItems, setInfoItems] = useState([
    '1st year IT major student',
    '2 months of studying python',
    'Struggles with code consistency',
  ])

  useEffect(() => {
    setLocalName(studentName)
  }, [studentName])

  const handleSave = () => {
    setIsEditing(false)
    setStudentName(localName)
    console.log('Profile saved:', { studentName: localName, bioFirst, bioSecond, infoItems })
  }

  return (
    <div className="profile-page">
      {/* Header Section */}
      <header className="profile-header-section">
        <div className="profile-header-bg"></div>
        <div className="profile-header-content">
          <button type="button" className="back-button" onClick={handleBackClick}>
            <span className="back-icon">★</span>
          </button>
          <div className="profile-header-texts">
            <h1 className="profile-title">PROFILE</h1>
            <p className="profile-subtitle">Student login</p>
          </div>
          <button type="button" className="logout-button" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="profile-main">
        {/* Student Information Card */}
        <div className="student-info-box">
          <div className="student-image-container">
            <div className="student-image-placeholder">
              {/* Placeholder for student image (purple-blue cat figurine) */}
            </div>
          </div>
          <div className="student-details">
            <div className="profile-edit-actions">
              {!isEditing ? (
                <button
                  type="button"
                  className="edit-button"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
              ) : (
                <button type="button" className="save-button" onClick={handleSave}>
                  Save
                </button>
              )}
            </div>
            {isEditing ? (
              <input
                className="student-name-input"
                value={localName}
                onChange={(e) => setLocalName(e.target.value)}
              />
            ) : (
              <h2 className="student-name">{studentName}</h2>
            )}
            <ul className="student-info-list">
              {infoItems.map((item, idx) => (
                <li key={idx}>
                  {isEditing ? (
                    <input
                      className="profile-editable-box"
                      value={item}
                      onChange={(e) => {
                        const copy = [...infoItems]
                        copy[idx] = e.target.value
                        setInfoItems(copy)
                      }}
                    />
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Biography Info Window */}
        <div className="student-bio-box">
          <h2 className="student-bio-title">About NS</h2>
          {isEditing ? (
            <>
              <textarea
                className="biography-textarea"
                value={bioFirst}
                onChange={(e) => setBioFirst(e.target.value)}
                rows={6}
              />
              <textarea
                className="biography-textarea"
                value={bioSecond}
                onChange={(e) => setBioSecond(e.target.value)}
                rows={6}
              />
            </>
          ) : (
            <>
              <p className="biography-paragraph">{bioFirst}</p>
              <p className="biography-paragraph">{bioSecond}</p>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default ProfilePage

