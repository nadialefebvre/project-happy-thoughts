import React, { useState, useEffect } from "react"
import { formatDistanceStrict } from "date-fns"

import ThoughtLike from "./ThoughtLike"

const ThoughtsList = (props) => {
  const { thoughtsList, setThoughtsList } = props

  const [isLoading, setIsLoading] = useState(false)

  // pourquoi 2 fois???
  // console.table(thoughtsList)

  const fetchThoughts = () => {
    setIsLoading(true)
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then((res) => res.json())
      .then((data) => {
        setThoughtsList(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchThoughts()
  }, [])

  if (isLoading === true) {
    return <div>Loading...</div>
  }

  return (
    <section>
      {thoughtsList.map((thought) => (
        <article className="old-thought-box" key={thought._id}>
          <p className="old-thought-message">{thought.message}</p>
          <div className="old-thought-details">
            <ThoughtLike
              thoughtId={thought._id}
              thoughtLikes={thought.hearts}
            />
            <span>
              {formatDistanceStrict(Date.parse(thought.createdAt), Date.now())}{" "}
              ago
            </span>
          </div>
        </article>
      ))}
    </section>
  )
}

export default ThoughtsList
