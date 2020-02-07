import React, { Fragment, Component } from 'react';
// import './video_list_item.css';

class VideoListItem extends Component{
    selectVideoHandler = (e) => {
        // console.log("안녕");
        this.props.onVideoSelect(this.props.video);
    }

    render() {
        // console.log(this.props);
        const { snippet } = this.props.video;
        return (
            <li className='list-group-item'  onClick={this.selectVideoHandler} >
                <div className='video-list media'>
                    <div className='media-left'>
                        <img className='media-object' src={snippet.thumbnails.default.url} />
                    </div>
                    <div className='media-body'>
                        <div className='media-heading'>
                            {snippet.title}
                        </div>
                    </div>
                </div>
            </li>
        )
    }

}
// const VideoListItem = (props) => {
// };

export default VideoListItem;