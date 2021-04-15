import * as React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import { useKeycloak } from '@react-keycloak/web'
import App   from '../pages/App'
import LoginPage  from '../pages/Login'
import { PrivateRoute } from './utils'

export const AppRouter = () => {
  const { initialized } = useKeycloak()

  if (!initialized) {
    return <div>Loading...</div>
  }

  return (
    <Router>
      {/* <Redirect from="/" to="/" /> */}
      <PrivateRoute path="/" component={App} />
      <Route path="/login" component={LoginPage} />
    </Router>
  )
}
