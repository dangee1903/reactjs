import React, { Component } from 'react';
import Item     from './../components/Item';
import Search   from './../components/Search';
class HomePage extends Component {
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <Search />
                </div>
                <div className="panel-body">
                    <Item />
                    <Item />
                    <Item />
                </div>
			</div>
        );
    }
}

export default HomePage;