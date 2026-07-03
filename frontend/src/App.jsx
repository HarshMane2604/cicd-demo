import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch data from the FastAPI backend
    fetch('http://localhost:8000/api/message')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setMessage('Error loading message from backend. Is it running?')
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      <h1>Full-Stack App Demo</h1>
      <div className="card">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <h2>{message}</h2>
        )}
      </div>
      <p className="read-the-docs">
        This is a simple React frontend talking to a Python FastAPI backend!
      </p>
    </div>
  )
}

export default App
