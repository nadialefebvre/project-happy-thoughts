import React from 'react'
import { formatDistanceToNowStrict } from 'date-fns'

const ThoughtItem = ({ thought, onLikeSubmit }) => {

  return (
        <article className="old-thought-box">
          <p className="old-thought-message">{thought.message}</p>
          <div className="old-thought-details">
            <div className="like-box">
              <button className={thought.hearts === 0 ? 'like-button not-liked' : 'like-button liked'} onClick={() => onLikeSubmit(thought._id)}>
                <p>
                  <span role="img" aria-label="heart">
                    ❤️
                  </span>
                </p>
              </button>
              <span className="like-text"> x {thought.hearts}</span>
            </div>
            <span>
              {formatDistanceToNowStrict(new Date(thought.createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
        </article>
  )
}

export default ThoughtItem


/*
// import ThoughtLike from './ThoughtLike'
  // const { isLoading, thought, onLikeSubmit } = props

  // if (isLoading === true) {
  //   return <div>Loading some happy thoughts...</div>
  // }

       {thoughtsList.map(thought => (
                     <ThoughtLike
              thoughtId={thought._id}
              thoughtLikes={thought.hearts}
              fetchThoughts={fetchThoughts}
            />


*/