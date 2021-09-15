import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userAuth } from '../action/authenticated'

function SideMenu (props) {
  const { authenticated, dispatch } = props

  function handleClick (e) {
    e.preventDefault()
    dispatch(userAuth({}))
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', padding: '30px', color: 'white', backgroundColor: 'black', width: '150px', minHeight: '100vh' }}>
      <Link to='/' className='link-info p-3' >Home</Link>
      {authenticated.name ? <Link to='#' className='link-info p-3' onClick={handleClick}>Log Out</Link>
        : <Link to='/login' className='link-info p-3'>Login</Link> }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(SideMenu)
