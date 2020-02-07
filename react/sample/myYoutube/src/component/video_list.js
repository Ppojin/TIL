import React, { Fragment } from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videos, onVideoSelect }) => {
    const videoItems = videos.map((value, index) => {
        return <VideoListItem key={value.etag} video={value} onVideoSelect={onVideoSelect} />
    });

    return (
        <Fragment>
            <ul className='col-md-4'>
                <li className="list-group-item">개수: {videos.length}</li>
                {videoItems}
            </ul>
        </Fragment>
    )
};

export default VideoList;