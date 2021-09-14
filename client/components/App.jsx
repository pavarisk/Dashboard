import React from 'react'
// import { getUsers } from '../apiClient'
// import UsersList from './UsersList'
import SideMenu from './SideMenu'
import BarChart from './BarChart'
import LoginPage from './LoginPage'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="d-flex mx-auto">
      <Route path='/' component={SideMenu} />
      <Route exact path='/' component={BarChart} />
      <Route exact path ='/login' component={LoginPage} />
    </div>
  )
}

export default App
