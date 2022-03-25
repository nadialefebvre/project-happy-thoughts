import React, { useState, useEffect } from 'react'

import NewThoughtForm from './NewThoughtForm'
import ThoughtItem from './ThoughtItem'

const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

const Page = () => {
  const [thoughts, setThoughts] = useState([])
  const [thoughtInput, setThoughtInput] = useState('')

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setThoughts(data))
      .catch(error => console.error(error))
  }

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
      <NewThoughtForm
        thoughtInput={thoughtInput}
        onThoughtSubmit={handleThoughtSubmit}
        setThoughtInput={setThoughtInput}
      />

      {thoughts.map(thought => (
        <ThoughtItem
          key={thought._id}
          thought={thought}
          onLikeSubmit={handleLikeSubmit}
        />
      ))}
    </main>
  )
}

export default Page

/*
  //   const [isLoading, setIsLoading] = useState(false)
    // setIsLoading(true)
    //   .finally(() => setIsLoading(false))
          //   isLoading={isLoading}
*/
