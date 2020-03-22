import React from 'react';
import ReactPlayer from 'react-player';
import './style.scss';

class Video extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="column small-12">
                    <div className="VideoContainer">
                        <ReactPlayer
                            className='react-player'
                            url='https://www.youtube.com/watch?v=yJHgU-kKEu4'
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;