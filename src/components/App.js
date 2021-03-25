import { React , Component } from 'react';
import Title from './Title';
import Breadcrumb from './Breadcrumb';
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
      <div className="container">
        <Title />
        <div className="row">
          <Breadcrumb />
          <Router>
            {this.showRoute(RouteConfig)}
          </Router>
        </div>
      </div>
    );
  }
  showRoute(RouteConfig){
    let xhtml = "";
    if(RouteConfig.length > 0){
      xhtml = RouteConfig.map((route,index) =>{
        return <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
      })
    }
    return <Switch>{xhtml}</Switch>;
  }
}

export default App;

