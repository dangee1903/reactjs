import React, { Component } from 'react';

class NewsItem extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr />
                            <h2 className="intro-text text-center">Build a website <strong>worth visiting</strong>
                            </h2>
                            <hr />
                            <img className="img-responsive img-border img-left" src="img/intro-pic.jpg" alt="" />
                            <hr className="visible-xs" />
                            <p>The boxes used in this template are nested inbetween a normal Bootstrap row and the start of your column layout. The boxes will be full-width boxes, so if you want to make them smaller then you will need to customize.</p>
                            <p>A huge thanks to <a href="http://join.deathtothestockphoto.com/" target="_blank">Death to the Stock Photo</a> for allowing us to use the beautiful photos that make this template really come to life. When using this template, make sure your photos are decent. Also make sure that the file size on your photos is kept to a minumum to keep load times to a minimum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl vestibulum dignissim. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr />
                            <h2 className="intro-text text-center">Beautiful boxes <strong>to showcase your content</strong>
                            </h2>
                            <hr />
                            <p>Use as many boxes as you like, and put anything you want in them! They are great for just about anything, the sky's the limit!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl vestibulum dignissim. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;