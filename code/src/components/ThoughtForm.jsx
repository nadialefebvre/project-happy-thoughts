import React, { useState } from "react"

const ThoughtForm = ( props ) => {
  const { setThoughtsList } = props

  const [thoughtInput, setThoughtInput] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: thoughtInput }),
    })
      .then((response) => response.json())
      .then((newThought) => {
        setThoughtsList((previousThoughts) => [newThought, ...previousThoughts])
        console.log(thoughtInput)
        setThoughtInput("")
      })
  }

  return (
    <article className="new-thought-box">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="thoughtInput">What's making you happy right now?</label>
        <textarea
          type="text"
          id="thoughtInput"
          placeholder="Write 5 to 140 characters"
          rows="3"
          // cols="60"
          onChange={(event) => setThoughtInput(event.target.value)}
          value={thoughtInput}
        ></textarea>
        <button type="submit" disabled={thoughtInput.length < 5 || thoughtInput.length > 140}><span role="img" aria-label='heart'>❤️</span> Send Happy Thought <span role="img" aria-label='heart'>❤️</span></button>
      </form>
    </article>
  )
}

export default ThoughtForm
