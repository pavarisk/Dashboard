import React /* ,{ useState, useEffect } */ from 'react'
// import { getUsers } from '../apiClient'
// import UsersList from './UsersList'
import SideMenu from './SideMenu'
import BarChart from './BarChart'
import LoginPage from './LoginPage'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

const App = (props) => {
  const { authenticated } = props

  return (<>
    <div className="d-flex mx-auto">
      <Route path='/' component={SideMenu} />

      <Route exact path='/' component={BarChart} />
      <Route exact path ='/login' component={LoginPage} />
    </div>
  </>)
}

function mapStateToProps (state) {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(App)
