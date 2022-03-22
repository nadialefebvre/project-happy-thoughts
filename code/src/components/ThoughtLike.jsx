import React from "react"

const ThoughtLike = (props) => {
  const { thoughtId, thoughtLikes } = props

  let classToUse = thoughtLikes === 0 ? "not-liked" : "liked"

  const handleLikeSubmit = (event) => {
    event.preventDefault()
    fetch(
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <div>
      <button className={classToUse} onClick={handleLikeSubmit}>
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
      <span> x {thoughtLikes}</span>
    </div>
  )
}

export default ThoughtLike
