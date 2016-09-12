import React, { Component } from 'react';
import SearchBar from '../containers/search_bar/search_bar';
import VideoList from '../containers/video_list';
import VideoDetail from '../containers/video_detail';
import { Link } from 'react-router';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <Link to="greet">Link on app go to greet</Link>
                {this.props.children}
                <SearchBar/>
                <VideoDetail/>
                <VideoList />
            </div>
        );
    }
}
