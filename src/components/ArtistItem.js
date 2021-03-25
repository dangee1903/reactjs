import React, { Component } from 'react';

class ArtistItem extends Component {
    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    <img src="https://i.scdn.co/image/2f8807acbf4fa0dce6f04eb053e6037e38bb963f" alt="Nếu Như" className="img-responsive" />
                    <div className="caption">
                    <h5><a href="/album/4cH93HgkeeW8IKJWsIY0gZ">Nếu Như</a></h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArtistItem;