import * as React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import { useKeycloak } from '@react-keycloak/web'

import HomePage   from '../pages/Home'
import LoginPage  from '../pages/Login'
import ThuTucPage from '../pages/ThuTuc'
import { PrivateRoute } from './utils'

export const AppRouter = () => {
  const { initialized } = useKeycloak()

  if (!initialized) {
    return <div>Loading...</div>
  }

  return (
    <Router>
      {/* <Redirect from="/" to="/" /> */}
      <PrivateRoute exact={true} path="/" component={HomePage} />
      <PrivateRoute path="/thutuc" component={ThuTucPage} />
      <Route path="/login" component={LoginPage} />
    </Router>
  )
}
