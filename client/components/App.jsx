import React, { useState, useEffect } from 'react'
import { getUsers } from '../apiClient'
import UsersList from './UsersList'
import SideMenu from './SideMenu'

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenu style={{ color: 'white', backgroundColor: 'black' }}/>
      <div>
        <UsersList getUsers={getUsers}/>
      </div>
    </div>
  )
}

export default App
