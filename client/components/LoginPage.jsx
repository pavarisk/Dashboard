import React from 'react'

function LoginPage () {
  return (
    <>
      <div>
        <label htmlFor="user_name">Username: </label>
        <input name='user_name' type='text' placeholder='Username'></input>
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input name='password' type='password' placeholder='Password'></input>
      </div>
    </>
  )
}

export default LoginPage
