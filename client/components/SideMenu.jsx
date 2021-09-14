import React from 'react'
import { Link } from 'react-router-dom'

function SideMenu (props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', padding: '30px', color: 'white', backgroundColor: 'black', width: '150px', minHeight: '100vh' }}>
      <Link to='/' className='link-info p-3' >Home</Link>
      <Link to='/login' className='link-info p-3'>Login</Link>
    </div>
  )
}

export default SideMenu
