import React, { useState } from 'react'
import { useStudent } from '../StudentContext'
import { useNavigate } from 'react-router-dom'
import '../styles/DailyChallengePage.css'

// Image assets from Figma
const imgCode = "https://www.figma.com/api/mcp/asset/46074c38-ad2e-4d8b-bc65-625b7e5f26d3"
const imgAiChatbot = "https://www.figma.com/api/mcp/asset/8be68469-0a6d-4aed-8aa3-665d63b1b62d"
const imgStarIcon = "https://www.figma.com/api/mcp/asset/e2c80c17-9ee1-413e-afcc-87f6dddeee69"

function CodeBlock({ codeLines }) {
  const lineNumbers = Array.from({ length: 31 }, (_, i) => i + 1)
  return (
    <div className="daily-code-block">
      <div className="daily-code-line-numbers">
        {lineNumbers.map((num) => (
          <p key={num} className="daily-code-line-number">{num}</p>
        ))}
      </div>
      <div className="daily-code-content">
        {codeLines.map((line, idx) => (
          <div key={idx} className="daily-code-line">{line}</div>
        ))}
      </div>
    </div>
  )
}

function DailyChallengePage() {
  const [code, setCode] = useState("");
  const [codeLines, setCodeLines] = useState([]);
  const navigate = useNavigate();
  const { studentName } = useStudent();

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && code.trim() !== "") {
      setCodeLines((prev) => [...prev, code]);
      setCode("");
    }
  };

  return (
    <div className="daily-container">
      {/* Header Section */}
      <header className="daily-header">
        <div className="daily-header-content">
          <button
            type="button"
            className="daily-star-button"
            onClick={() => navigate("/shop")}
            aria-label="Star"
          >
            <img alt="Star" src={imgStarIcon} />
          </button>
          <div className="daily-header-texts">
            <h1 className="daily-header-title">{studentName}</h1>
            <p className="daily-header-subtitle">Student profile</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="daily-main">
        {/* Left Sidebar */}
        <aside className="daily-sidebar">
          <div className="daily-sidebar-header">
            <h2 className="daily-sidebar-title">Daily challenge</h2>
            <p className="daily-sidebar-subtitle">No AI allowed!</p>
          </div>

          <div className="daily-sidebar-content">
            <p>
              Dizzy, the protagonist, had been captured by the evil Sir Scales. Escape is not an easy
              task, but with your help Dizzy can get out!
            </p>
            <ul>
              <li>
                Write controls that allow class char to move across the map by using keys WASD. Feel
                free to use materials from previous lessons if any struggle occurrs.
              </li>
            </ul>
          </div>
        </aside>

        {/* Right Content Area */}
        <div className="daily-content-area">

          {/* Code Editor Section */}
          <div className="daily-editor-section">
            {/* Code Block */}
            <div className="daily-code-wrapper">
              <CodeBlock codeLines={codeLines} />
            </div>

            {/* Input Area */}
            <div className="daily-input-wrapper">
              <input
                type="text"
                className="daily-input"
                placeholder="Input here"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={handleInputKeyDown}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyChallengePage

