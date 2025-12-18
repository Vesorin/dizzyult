import React, { useState } from 'react'
import { useStudent } from '../StudentContext'
import { useNavigate } from 'react-router-dom'
import '../styles/ShopPage.css'

// Image assets from Figma
const imgHeader = "/dizzyultadv/images/headerforest.png"
const imgPageProductResults = "https://www.figma.com/api/mcp/asset/14da0a6d-0fab-4d40-8634-94d35a331735"
const imgImage = "https://www.figma.com/api/mcp/asset/3b31104c-44aa-4ffd-9737-da5d39697c30"
const imgImage1 = "https://www.figma.com/api/mcp/asset/a61bb7d7-07b8-49b8-be04-c7fc9edfbfd0"
const imgImage2 = "https://www.figma.com/api/mcp/asset/5073c7a4-3d94-4395-8ba1-479ca9210025"
const imgImage3 = "https://www.figma.com/api/mcp/asset/6cb2d177-aae2-4667-80c7-a50a6c1f11d6"
const imgImage4 = "https://www.figma.com/api/mcp/asset/17002dce-ddf6-4d75-b061-0cab03d37abe"
const imgImage5 = "https://www.figma.com/api/mcp/asset/84bd398c-bdbc-4cd8-b038-b92183a84ba6"
const imgIcon = "https://www.figma.com/api/mcp/asset/3d5b5ad1-8d52-4ce4-b70c-46a0b82b7f1a"
const imgCheckIcon = "https://www.figma.com/api/mcp/asset/c723a5a6-0d5d-4247-ad35-90ab30623634"
const imgXIcon = "https://www.figma.com/api/mcp/asset/7c02b674-b52d-412d-971a-568118278ddc"

// Level data
const levels = [
  { id: 1, image: imgImage5, level: 'Level 1', title: 'Journey begins', link: 'https://playclassic.games/games/adventure-dos-games-online/play-fantastic-adventures-dizzy-online/play/' },
  { id: 2, image: imgImage4, level: 'Level 2', title: 'Learning', link: 'https://playclassic.games/games/adventure-dos-games-online/play-fantastic-adventures-dizzy-online/play/' },
  { id: 3, image: imgImage3, level: 'Level 3', title: 'IDK man', link: 'https://playclassic.games/games/adventure-dos-games-online/play-fantastic-adventures-dizzy-online/play/' },
  { id: 4, image: imgImage2, level: 'Level 4', title: 'uhm why is it brown', link: 'https://playclassic.games/games/adventure-dos-games-online/play-fantastic-adventures-dizzy-online/play/' },
  { id: 5, image: imgImage1, level: 'Level 5', title: 'Almost there!!', link: 'https://playclassic.games/games/adventure-dos-games-online/play-fantastic-adventures-dizzy-online/play/' },
  { id: 6, image: imgImage, level: 'Level 67', title: 'What', link: 'https://playclassic.games/games/adventure-dos-games-online/play-fantastic-adventures-dizzy-online/play/' },
]

function LevelCard({ level, image, title, link }) {
  return (
    <a href={link} className="shop-level-card">
      <div className="shop-card-image">
        <img alt={title} src={image} />
      </div>
      <div className="shop-card-body">
        <p className="shop-card-level">{level}</p>
        <p className="shop-card-title">{title}</p>
      </div>
    </a>
  )
}

function CheckboxField({ id, label, description, checked, onChange }) {
  return (
    <div className="shop-checkbox-field">
      <div className="shop-checkbox-group">
        <input
          type="checkbox"
          id={id}
          className="shop-checkbox"
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={id} className="shop-checkbox-label">{label}</label>
      </div>
      <div className="shop-checkbox-description">
        <div className="shop-checkbox-space"></div>
        <p className="shop-description-text">{description}</p>
      </div>
    </div>
  )
}

function Tag({ label, removable = true, onRemove }) {
  return (
    <div className="shop-tag">
      <p>{label}</p>
      {removable && (
        <button className="shop-tag-remove" onClick={onRemove}>
          <img alt="Remove" src={imgXIcon} />
        </button>
      )}
    </div>
  )
}

export default function ShopPage() {
  const navigate = useNavigate()
  const { studentName } = useStudent()
  const [searchQuery, setSearchQuery] = useState('')
  const [tags, setTags] = useState(['Yolkfolk', 'Python', 'Learn'])
  const [filterTags, setFilterTags] = useState(['Yolkfolk', 'Python', 'Learn'])
  const [dailyLevel, setDailyLevel] = useState(true)
  const [myStudy, setMyStudy] = useState(true)
  const [checkpoint, setCheckpoint] = useState(true)
  const [difficulty, setDifficulty] = useState(50)
  const [activeFilter, setActiveFilter] = useState('daily') // 'daily', 'levels', 'achievements', 'review'

  const removeTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index)
    setTags(newTags)
    setFilterTags(newTags)
  }

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
    // navigate to the corresponding page for specific filters
    if (filter === 'daily') navigate('/daily')
    if (filter === 'achievements') navigate('/achievements')
    if (filter === 'levels') navigate('/levels')
  }

  return (
    <div className="shop-container">
      {/* Header */}
      <div className="shop-header">
        {/* header image removed, background handled by CSS */}
        <div className="shop-header-left">
          <button
            className="back-button"
            onClick={() => navigate('/profile')}
          >
            <span className="back-icon">★</span>
          </button>
          <div className="header-user-info">
            <h2 className="user-name">{studentName}</h2>
            <p className="user-role">Student profile</p>
          </div>
        </div>
        <div className="shop-header-bigtext">Hard work pays off!</div>
      </div>

      {/* Main Content */}
      <div className="shop-main">
        
        {/* Sidebar Filter Menu */}
        <aside className="shop-filter-menu">
          {/* Tags Section */}
          <div className="shop-filter-section">
            <p className="shop-filter-title">TAGS</p>
            <div className="shop-tags-container">
              {tags.map((tag, index) => (
                <Tag
                  key={index}
                  label={tag}
                  removable={true}
                  onRemove={() => removeTag(index)}
                />
              ))}
            </div>
          </div>

          {/* Checkboxes Section */}
          <div className="shop-filter-section">
            <div className="shop-checkbox-group-container">
              <CheckboxField
                description="Description"
                checked={dailyLevel}
                onChange={(e) => setDailyLevel(e.target.checked)}
              />
              <CheckboxField
                id="my-study"
                label="My study"
                description="Description"
                checked={myStudy}
                onChange={(e) => setMyStudy(e.target.checked)}
              />
              <CheckboxField
                id="checkpoint"
                label="Checkpoint"
                description="Description"
                checked={checkpoint}
                onChange={(e) => setCheckpoint(e.target.checked)}
              />
            </div>
          </div>

          {/* Difficulty Slider */}
          <div className="shop-filter-section">
            <div className="shop-slider-header">
              <label>Difficulty</label>
              <span className="shop-slider-output">{difficulty}-100</span>
            </div>
            <div className="shop-slider-container">
              <input
                type="range"
                min="0"
                max="100"
                value={difficulty}
                onChange={(e) => setDifficulty(Number(e.target.value))}
                className="shop-slider"
              />
            </div>
          </div>

          {/* Color Section */}
          <div className="shop-filter-section">
            <p className="shop-filter-title">Color</p>
          </div>

          {/* Inset Shadow */}
          <div className="shop-filter-shadow"></div>
        </aside>

        {/* Main Content Area */}
        <div className="shop-content-area">
          {/* Filter Bar */}
          <div className="shop-filter-bar">
            <div className="shop-search-container">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="shop-search-input"
              />
              <img alt="Search" className="shop-search-icon" src={imgIcon} />
            </div>

            {/* Filter Tags */}
            <div className="shop-filter-tags">
              <button
                className={`shop-filter-tag ${activeFilter === 'daily' ? 'active' : ''}`}
                onClick={() => handleFilterClick('daily')}
              >
                ✓ Daily
              </button>
              <button
                className={`shop-filter-tag ${activeFilter === 'levels' ? 'active' : ''}`}
                disabled
                style={{ pointerEvents: 'none', opacity: 0.6 }}
              >
                Levels completed
              </button>
              <button
                className={`shop-filter-tag ${activeFilter === 'achievements' ? 'active' : ''}`}
                onClick={() => handleFilterClick('achievements')}
              >
                Achievements
              </button>
              <button
                className={`shop-filter-tag review ${activeFilter === 'review' ? 'active' : ''}`}
                onClick={() => handleFilterClick('review')}
              >
                Review
              </button>
            </div>
          </div>

          {/* Card Grid */}
          <div className="shop-card-grid">
            {levels.map((item) => (
              <LevelCard
                key={item.id}
                level={item.level}
                image={item.image}
                title={item.title}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
