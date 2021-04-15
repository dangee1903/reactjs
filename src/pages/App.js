import * as React from 'react'
import { useCallback , useEffect } from 'react'
import { useKeycloak } from '@react-keycloak/web'
import { useAxios } from '../utils/hooks'
import Header from '../components/Header';
import Thutuc from '../pages/ThuTuc'
import Notfound from '../pages/Notfound'
// import Home from '../pages/Home'
import Taothutuc from '../pages/Taothutuc'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import { render } from '@testing-library/react';
export default (props) => {
    const { keycloak } = useKeycloak()
    const axiosInstance = useAxios('http://localhost:5000')
    const callApi = useCallback(() => {
        !!axiosInstance.current && axiosInstance.current.get('/jwt/decode')
    }, [axiosInstance])
    return (
    <Router>
    <div>
        <Header />
        <main className="home">
            <title />
            <section className="content">
                <title />
            <div className="content__wrap container-fluid">
                <Switch>
                    <Route exact path="/">
                        {/* <Home /> */}
                    </Route>
                    <Route exact path="/thutuc">
                        <Thutuc />
                    </Route>
                    <Route exact path="/taothutuc/:id" component={({match}) => <Taothutuc match={match}/>}>
                    </Route>
                    <Route path="">
                        <Notfound />
                    </Route>
                </Switch>
            </div>
            </section>
        </main>
    </div>
    </Router>
   )
}