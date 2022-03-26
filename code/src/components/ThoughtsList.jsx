import React from 'react'
import { formatDistanceToNow } from 'date-fns'

import Emoji from './Emoji'

const ThoughtsList = props => {
  const { thoughts, onLikeSubmit } = props
  
  return (
    <>
    {thoughts.map(thought => (
        <article key={thought._id} className="thought-box">
          <p className="thought-message">{thought.message}</p>
          <div className="thought-details-box">
            <div className="thought-like-box">
              <button className={`thought-like-button ${thought.hearts === 0 ? 'not-liked' : 'liked'}`} onClick={() => onLikeSubmit(thought._id)}>
                <p>
                  <Emoji symbol="❤️" label="heart"/>
                </p>
              </button>
              <span className="thought-like-text"> x {thought.hearts}</span>
            </div>
            <span className='thought-date'>
              {formatDistanceToNow(new Date(thought.createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
        </article>
    ))}
    </>
  )
}

export default ThoughtsList