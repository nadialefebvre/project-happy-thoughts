import React, { useState, useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

import Header from './Header'
import ThoughtsList from './ThoughtsList'
import Footer from './Footer'

smoothscroll.polyfill()

// const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
// new URL of my own API (old with Heroku)
const API_URL = 'https://happy-thoughts-by-nadia.herokuapp.com/thoughts'
// new URL of my own API (new with Google Cloud)
// const API_URL = 'https://happy-thoughts-by-nadia-k4dsiyy6ga-uc.a.run.app/thoughts'

const Page = () => {
  const [thoughts, setThoughts] = useState([])
  const [thoughtInput, setThoughtInput] = useState('')
  const [usernameInput, setUsernameInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const fetchThoughts = () => {
    setIsLoading(true)
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setThoughts(data)
        setIsLoading(false)
      })
      .catch(error => console.error(error))
  }

  useEffect(() => fetchThoughts(), [])

  const handleThoughtSubmit = e => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: thoughtInput, username: usernameInput }),
    }
    fetch(API_URL, options)
      .then(res => res.json())
      .then(() => {
        fetchThoughts()
        setThoughtInput('')
        setUsernameInput('')
      })
      .finally(
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      )
  }

  const handleLikeSubmit = thoughtId => {
    const options = {
      method: 'POST',
    }
    fetch(`${API_URL}/${thoughtId}/like`, options)
      .then(res => res.json())
      .then(() => fetchThoughts())
  }

  return (
    <main className="main-box">
      <Header
        thoughtInput={thoughtInput}
        onThoughtSubmit={handleThoughtSubmit}
        setThoughtInput={setThoughtInput}
        usernameInput={usernameInput}
        setUsernameInput={setUsernameInput}
      />
      <ThoughtsList
        thoughts={thoughts}
        onLikeSubmit={handleLikeSubmit}
        isLoading={isLoading}
      />
      <Footer />
    </main>
  )
}

export default Page
