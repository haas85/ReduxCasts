import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SearchBar from './containers/search_bar';
import VideoList from './containers/video_list';
import VideoDetail from './containers/video_detail';

import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import configureStore from './store/configureStore';
import ActorHandler from './actors/index';

const USE_REDUX_PROMISE = true;
let _store;

if(USE_REDUX_PROMISE) {
  _store = applyMiddleware(ReduxPromise)(createStore)(reducers);
} else {
  _store = configureStore();
}

ActorHandler(_store);

export const store = _store;

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
  }

  selectedVideo(selectedVideo) {
      this.setState({selectedVideo});
      this.videoComments(selectedVideo);
  }

  render() {
    // const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
        <Provider store={_store}>
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
