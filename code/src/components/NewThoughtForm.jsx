import React from 'react'

const NewThoughtForm = props => {
  const { onThoughtSubmit, thoughtInput, setThoughtInput } = props

  let classToUse =
    (thoughtInput.length !== 0 && thoughtInput.length < 5) ||
    thoughtInput.length > 140
      ? 'new-thought-input-length wrong'
      : 'new-thought-input-length right'

  return (
    <article className="new-thought-box">
      <form onSubmit={onThoughtSubmit}>
        <label htmlFor="thoughtInput">What's making you happy right now?</label>
        <textarea
          className="new-thought-input"
          type="text"
          id="thoughtInput"
          placeholder="Write 5 to 140 characters"
          // height instead of rows???
          // rows="3"
          onChange={e => setThoughtInput(e.target.value)}
          value={thoughtInput}
        ></textarea>
        <div className="new-thought-bottom">
          <button
            className="new-thought-button-box"
            type="submit"
            disabled={thoughtInput.length < 5 || thoughtInput.length > 140}
          >
            <span
              className="new-thought-button-heart"
              role="img"
              aria-label="heart"
            >
              ❤️
            </span>
            <span className="new-thought-button-text">
              {' '}
              Send Happy Thought{' '}
            </span>
            <span
              className="new-thought-button-heart"
              role="img"
              aria-label="heart"
            >
              ❤️
            </span>
          </button>
          <div className={classToUse}>{thoughtInput.length}/140</div>
        </div>
      </form>
    </article>
  )
}

export default NewThoughtForm
