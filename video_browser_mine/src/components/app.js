import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../containers/search_bar';
import VideoList from '../containers/video_list';
import VideoDetail from '../containers/video_detail';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail/>
                <VideoList />
            </div>
        );
    }
}
