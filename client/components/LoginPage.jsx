import React from 'react'

function LoginPage () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
      <div>
        <label htmlFor="user_name">Username: </label>
        <input name='user_name' type='text' placeholder='Username'></input>
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input name='password' type='password' placeholder='Password'></input>
      </div>
      <div>
        <button>Log In</button>
      </div>
    </div>
  )
}

export default LoginPage
