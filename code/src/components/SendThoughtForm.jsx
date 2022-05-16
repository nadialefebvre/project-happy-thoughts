import React from 'react'

import Emoji from './Emoji'

const SendThoughtForm = props => {
  const {
    onThoughtSubmit,
    thoughtInput,
    setThoughtInput,
    usernameInput,
    setUsernameInput,
  } = props

  let classToUse =
    thoughtInput.length !== 0 && thoughtInput.trim().length < 5
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
          maxLength="140"
          onChange={e => setThoughtInput(e.target.value)}
          placeholder="Write 5 to 140 characters"
          value={thoughtInput}></textarea>
        <label className="thought-username" htmlFor="inputUsername">
          by:{' '}
        </label>
        <input
          className="thought-username"
          id="inputUsername"
          maxLength="15"
          onChange={e => setUsernameInput(e.target.value)}
          type="text"
          value={usernameInput}
        />
        <div className="input-submit-box">
          <button
            className="input-button"
            disabled={thoughtInput.trim().length < 5}
            type="submit">
            <Emoji symbol="❤️" label="heart" />
            <span className="input-button-text">Send Happy Thought</span>
            <Emoji symbol="❤️" label="heart" />
          </button>
          <div className={classToUse}>{thoughtInput.trim().length}/140</div>
        </div>
      </form>
    </article>
  )
}

export default SendThoughtForm
