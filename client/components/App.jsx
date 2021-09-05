import React, { useState, useEffect } from 'react'
import { getGreeting, getUsers } from '../apiClient'
import UsersList from './UsersList'

const App = () => {
  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    getGreeting()
      .then((greeting) => {
        console.log(greeting)
        setGreeting(greeting)
        return null
      })
      .catch(e => console.log(e.message))
  }, [count])

  return (
    <>
      {count}
      <h1>{greeting}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>user's list</p>
      <UsersList getUsers={getUsers}/>
    </>
  )
}

export default App
