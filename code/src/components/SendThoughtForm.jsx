import React from 'react'

import Emoji from './Emoji'

const SendThoughtForm = props => {
  const { onThoughtSubmit, thoughtInput, setThoughtInput } = props

  let classToUse =
    (thoughtInput.length !== 0 && thoughtInput.length < 5) ||
    thoughtInput.length > 140
      ? 'input-message-length wrong'
      : 'input-message-length'

  return (
    <article className="input-box">
      <form onSubmit={onThoughtSubmit}>
        <label htmlFor="inputMessage">What's making you happy right now?</label>
        <textarea
          className="input-message"
          id="inputMessage"
          autoFocus
          onChange={e => setThoughtInput(e.target.value)}
          placeholder="Write 5 to 140 characters"
          value={thoughtInput}
        ></textarea>
        <div className="input-submit-box">
          <button
            className="input-button"
            disabled={thoughtInput.length < 5 || thoughtInput.length > 140}
            type="submit"
          >
            <Emoji symbol="❤️" label="heart" />
            <span className="input-button-text">Send Happy Thought</span>
            <Emoji symbol="❤️" label="heart" />
          </button>
          <div className={classToUse}>{thoughtInput.length}/140</div>
        </div>
      </form>
    </article>
  )
}

export default SendThoughtForm
