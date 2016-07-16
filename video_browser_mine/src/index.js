import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import YTComments from './lib/YTComments';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      comments: [],
      selectedVideo: null,
      term: 'surfboards'
    };

    this.videoSearch(this.state.term);
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      this.videoComments();
    });
  }

  videoComments() {
    if (!this.state.selectedVideo) {
      return
    }
    YTComments({key: API_KEY, video: this.state.selectedVideo.id.videoId}, (comments) => {
      this.setState({ comments });
    });
  }

  selectedVideo(selectedVideo) {
      this.setState({selectedVideo});
      this.videoComments();
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar term={this.state.term} onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} comments={this.state.comments}/>
        <VideoList
          onVideoSelect={(selectedVideo) => {this.selectedVideo(selectedVideo)}}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
