import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
const menus = [
    {to : '/' , exact: true, name : 'Home'},
    {to : '/blog' , exact: true, name : 'Blog'},
    {to : '/about' , exact: true, name : 'About'},
    {to : '/login' , exact: true, name : 'Login'},
    {to : '/userPage' , exact: true, name : 'Userpage'},
];
const OldSchoolMenuLink = ({menu}) => {
    let match = useRouteMatch({
      path: menu.to,
      exact: menu.exact
    });

    return (
      <li className={match ? "active" : ""}>
        <Link to={menu.to}>{menu.name}</Link>
      </li>
    );
}

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="index.html">Business Casual</a>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            {this.showItems(menus)}
                            {/* <li><a href="index.html">Home</a>
                            </li>
                            <li><a href="about.html">About</a>
                            </li>
                            <li><a href="blog.html">Blog</a>
                            </li>
                            <li><a href="contact.html">Contact</a>
                            </li> */}
                        </ul>
                    </div>
                    {/* /.navbar-collapse */}
                </div>
                {/* /.container */}
            </nav>
        );
    }
    showItems(menus) {
        let xhtml = null;
        if(menus.length > 0){
            xhtml = menus.map((menu,index) => {
                return (
                    <OldSchoolMenuLink menu={menu} key={index}/>
                );
            })
        }
        return xhtml;
    }
}

export default Navigation;