import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import WaitlistPage from './pages/WaitlistPage'
import ShopPage from './pages/ShopPage'
import LevelsPage from './pages/LevelsPage'
import AchievementsPage from './pages/AchievementsPage'
import DailyChallengePage from './pages/DailyChallengePage'
import ProfilePage from './pages/ProfilePage'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/dizzyultadv">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/levels" element={<LevelsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/daily" element={<DailyChallengePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

