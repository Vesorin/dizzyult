import React, { createContext, useContext, useState, useEffect } from 'react'

const StudentContext = createContext()

export function StudentProvider({ children }) {
  // Try to load from localStorage, fallback to default
  const [studentName, setStudentName] = useState(() => {
    return localStorage.getItem('studentName') || 'Name Surname'
  })

  useEffect(() => {
    localStorage.setItem('studentName', studentName)
  }, [studentName])

  return (
    <StudentContext.Provider value={{ studentName, setStudentName }}>
      {children}
    </StudentContext.Provider>
  )
}

export function useStudent() {
  return useContext(StudentContext)
}
