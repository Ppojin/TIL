import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return (
            <div>로딩중...</div>
        )
    }
    
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className="col-md-8">
            <div className="card">
                <div className='card-img-top embed-responsive embed-responsive-16by9'>
                    <iframe className="embed-responsive-item" src={videoSrc} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{video.snippet.title}</h5>
                    <p className="card-text">{video.snippet.description}</p>
                    <p className="card-text"><small className="text-muted">{video.snippet.publishedAt}</small></p>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail;