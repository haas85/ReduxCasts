import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import YTComments from './lib/YTComments';
import SearchBar from './containers/search_bar';
import VideoList from './containers/video_list';
import VideoDetail from './containers/video_detail';
const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import configureStore from './store/configureStore';

const USE_REDUX_PROMISE = true;
let store;

if(USE_REDUX_PROMISE) {
  store = applyMiddleware(ReduxPromise)(createStore)(reducers);
} else {
  store = configureStore();
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      comments: [],
      selectedVideo: null,
      term: 'surfboards'
    };
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
    // const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
        <Provider store={store}>
            <div>
                <SearchBar/>
                <VideoDetail comments={this.state.comments}/>
                <VideoList />
            </div>
        </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
