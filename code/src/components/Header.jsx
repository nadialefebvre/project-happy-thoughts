import React from 'react'

import SendThoughtForm from './SendThoughtForm'

const Header = props => {
  const {
    onThoughtSubmit,
    thoughtInput,
    setThoughtInput,
    usernameInput,
    setUsernameInput,
  } = props

  return (
    <header className="header">
      <h1>Happy Thoughts 2022</h1>
      <SendThoughtForm
        thoughtInput={thoughtInput}
        onThoughtSubmit={onThoughtSubmit}
        setThoughtInput={setThoughtInput}
        usernameInput={usernameInput}
        setUsernameInput={setUsernameInput}
      />
    </header>
  )
}

export default Header
