import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/search_bar';
import VideoList from './component/video_list';
import VideoDetail from './component/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = '';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.callSearchAPI("슈카월드");
  }

  callSearchAPI = (term) => {
    YTSearch({ key: API_KEY, term: term }, (data) => {
      this.setState({ videos: data, selectedVideo: data[0] });
      console.log(data);
    })
  }

  selectVideoHandler = (video) => {
    this.setState({ selectedVideo: video })
  }

  searchingHandler = (term) => {
    this.callSearchAPI(term);
  }

  render(){
    // console.log(this.selectVideoHandler)
    return(
      <Fragment>
        <div className=''>
          <SearchBar onSearch={ this.searchingHandler } />
          <div className='row'>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList videos={this.state.videos} onVideoSelect={ this.selectVideoHandler } />
          </div>
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));