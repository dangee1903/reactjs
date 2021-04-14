import * as React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import { useKeycloak } from '@react-keycloak/web'

import HomePage   from '../pages/Home'
import App   from '../pages/App'
import LoginPage  from '../pages/Login'
import ThuTucPage from '../pages/ThuTuc'
import TaoThuTucPage from '../pages/Taothutuc'
import Notfound from '../pages/Notfound'
import { PrivateRoute } from './utils'

export const AppRouter = () => {
  const { initialized } = useKeycloak()

  if (!initialized) {
    return <div>Loading...</div>
  }

  return (
    <Router>
      <Redirect from="/" to="/" />
      <PrivateRoute exact path="/" component={App} />
      <Route path="/login" component={LoginPage} />
    </Router>
  )
}
