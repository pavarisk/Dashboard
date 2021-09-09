import React from 'react'
import { Link } from 'react-router-dom'

function SideMenu (props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', padding: '30px', color: 'white', backgroundColor: 'black', width: '150px', minHeight: '100vh' }}>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default SideMenu
