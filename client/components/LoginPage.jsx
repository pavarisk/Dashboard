import React, { useState } from 'react'
import { getUserByName } from '../apiClient'

function LoginPage (props) {
  const [userName, setUserName] = useState('')
  const [pin, setPin] = useState('')
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

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
        if (res === null) {
          return setError('The user and pin provided does not match our records')
        } else if (pin === res.pin) {
          setLoading(true)
          return setTimeout(() => props.history.push('/'), 2000)
        } else return setError('The user and pin provided does not match our records')
      })
      .catch(e => console.log(e.message))
  }

  return (
    <div className='container p-4'>
      {error && <h3>{error}</h3>}
      <div className='mb-3'>
        <label htmlFor="name" className='form-label'>Name: </label>
        <input name='name' type='text' placeholder="User's Name" className='form-control' required onChange={handleName}/>
      </div>
      <div className='mb-3'>
        <label htmlFor="pin" className='form-label'>Pin: </label>
        <input name='pin' type='password' placeholder='Pin' className='form-control' required onChange={handlePin}/>
      </div>
      <div className='mb-3'>
        <button className='btn-dark' onClick={handleClick}>Log In</button>
        {loading && <p className='mt-3'>Loading</p>}
      </div>
    </div>
  )
}

export default LoginPage
