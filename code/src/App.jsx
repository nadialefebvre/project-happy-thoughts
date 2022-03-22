import React, { useState } from 'react'

import ThoughtsList from './components/ThoughtsList'
import ThoughtForm from './components/ThoughtForm'

const App = () => {

  const [thoughtsList, setThoughtsList] = useState([])

  return (
    <main className='main-box'>
      <ThoughtForm setThoughtsList={setThoughtsList} />
      <ThoughtsList thoughtsList={thoughtsList} setThoughtsList={setThoughtsList} />
    </main>
  )
}

export default App
