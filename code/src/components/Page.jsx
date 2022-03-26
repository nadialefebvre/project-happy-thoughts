import React, { useState, useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

import Header from './Header'
import ThoughtsList from './ThoughtsList'
import Footer from './Footer'

smoothscroll.polyfill()

const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

const Page = () => {
  const [thoughts, setThoughts] = useState([])
  const [thoughtInput, setThoughtInput] = useState('')

  const fetchThoughts = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setThoughts(data))
      .catch(error => console.error(error))
  }

  useEffect(() => fetchThoughts(), [])

  const handleThoughtSubmit = e => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: thoughtInput }),
    }
    fetch(API_URL, options)
      .then(res => res.json())
      .then(() => {
        fetchThoughts()
        setThoughtInput('')
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
      />
      <ThoughtsList thoughts={thoughts} onLikeSubmit={handleLikeSubmit} />
      <Footer />
    </main>
  )
}

export default Page
