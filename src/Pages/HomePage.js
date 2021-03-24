import React, { Component } from 'react';
import Slide from './../components/Slide';
import NewsItem from './../components/NewsItem';
class HomePages extends Component {
    render() {
        return (
            <div>
                <Slide />
                <NewsItem />
            </div>
        );
    }
}

export default HomePages;