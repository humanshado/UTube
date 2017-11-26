import React from 'react';

const VideoDetails = (props) => {
    
    const videoId = props.activeVideo.id;
    const activeVideoURL = 'https://www.youtube.com/embed/'+ videoId;

        if (!props) {
            <div>Loading...</div>
        }

        return(
            <div>
                <h4><strong>Playing ...</strong> {props.activeVideo.title}</h4>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={activeVideoURL}></iframe>
                </div>
                <div>
                    <h4><strong>Description...</strong></h4>
                    <div>{props.activeVideo.description}</div>
                </div><hr />
                <div>
                    <h4><strong>User comments here ... coming soon</strong></h4>
                </div>
            </div>
        );
}

export default VideoDetails;