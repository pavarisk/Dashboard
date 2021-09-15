import React, { useState } from 'react'
import { getUserByName } from '../apiClient'
import { connect } from 'react-redux'
import { userAuth } from '../action/authenticated'

function LoginPage (props) {
  const { dispatch } = props
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
    setError()
    getUserByName(userName)
      .then(res => {
        if (res === null) {
          return setError('The user and pin provided does not match our records')
        } else if (pin === res.pin) {
          dispatch(userAuth(res))
          setLoading(true)
          console.log(props)
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
        <label htmlFor="pin" className='form-label'>PIN: </label>
        <input name='pin' type='password' placeholder='PIN' className='form-control' required onChange={handlePin}/>
      </div>
      <div className='mb-3'>
        <button className='btn-dark' onClick={handleClick}>Log In</button>
        {loading && <p className='mt-3'>Loading...</p>}
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  console.log(state)
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(LoginPage)
