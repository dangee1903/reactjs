import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import RouteConfig from './../route-config';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <Header />
          <Navigation />
          <div className="container">
              {this.showRoute(RouteConfig)};
          </div>
          <Footer />
      </div>
      </Router>
    );
  }
  showRoute(RouteConfig){
      let html = null;
      if(RouteConfig.length > 0){
        html = RouteConfig.map((route,index)=>{
          return( 
            <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
          )
        })
      }
      return <Switch>{html}</Switch>;
  }
}

export default App;
