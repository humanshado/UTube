import React from 'react';

class VideoList extends React.Component{
    
    render(){
        console.log('props in videoList', this.props);
        if(!this.props.videos){
            <div>Videos Loading, please wait...</div>
        }

        let videoItems = this.props.videos.map((video) => {
            const thumbnailURL = video.thumbnails.default.url;
            return <li key={video.id} className="media">
                <div className="media-left">
                    <img className="media-object" src={thumbnailURL} />
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{video.title}</h4>
                    <p>Description here...</p>
                </div>
            </li>
        })

        return(
            <ul className="media-list">
                { videoItems }
            </ul>
        );
    }
}

export default VideoList;