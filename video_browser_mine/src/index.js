import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import YTSearch from 'youtube-api-search';
import YTComments from './lib/YTComments';
import SearchBar from './containers/search_bar';
import VideoList from './containers/video_list';
import VideoDetail from './containers/video_detail';
import configureStore from './store/configureStore';
const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

const store = configureStore();

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
      this.videoComments(videos[0]);
    });
  }

  videoComments(video) {
    if (!video && !this.state.selectedVideo) {
      return
    }

    let _video = video || this.state.selectedVideo;

    YTComments({key: API_KEY, video: _video.id.videoId}, (comments) => {
      this.setState({ comments });
    }, ()=>{
      this.setState({comments: []}) ;
    });
  }

  selectedVideo(selectedVideo) {
      this.setState({selectedVideo});
      this.videoComments(selectedVideo);
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
        <Provider store={store}>
            <div>
                <SearchBar term={this.state.term} onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} comments={this.state.comments}/>
                <VideoList
                  onVideoSelect={(selectedVideo) => {this.selectedVideo(selectedVideo)}}
                  videos={this.state.videos} />
            </div>
        </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
