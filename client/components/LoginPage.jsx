import React, { useState } from 'react'
import { getUserByName } from '../apiClient'

function LoginPage (props) {
  const [userName, setUserName] = useState('')
  const [pin, setPin] = useState('')

  function handleName (e) {
    const name = e.target.value
    return setUserName(name)
  }

  function handlePin (e) {
    const pin = Number(e.target.value)
    return setPin(pin)
  }

  function handleClick (e) {
    e.preventDefault()
    console.log('Click has been handled')
    getUserByName(userName)
      .then(res => {
        if (pin === res.pin) {
          return setTimeout(() => props.history.push('/'), 2000)
        } else return console.log('The user and pin provided does not match our records')
      })
      .catch(e => console.log(e.message))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
      <div>
        <label htmlFor="name">Name: </label>
        <input name='name' type='text' placeholder="User's Name" onChange={handleName}/>
      </div>
      <div>
        <label htmlFor="pin">Pin: </label>
        <input name='pin' type='password' placeholder='Pin' onChange={handlePin}/>
      </div>
      <div>
        <button onClick={handleClick}>Log In</button>
      </div>
    </div>
  )
}

export default LoginPage
