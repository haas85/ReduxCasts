import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions/videoManager';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    let term = this.props.term || 'surfboard';
    this.state = { term: term, history: [term] };
    this.props.fetchVideos(this.state.term);
  }

  render() {
    return (
        <div className="search-bar">
          <input
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)} />
        </div>
    );
  }

  onInputChange(term) {
    // If we want to notify a change to an upper view without using redux we use data down actions up, so we need
    // to receive the function that receives data as a parameter
    this.setState({
      term: term,
      history: [ ...this.state.history, term]
    });
    this.props.fetchVideos(term);
  }
}

const mapStateToProps = (state) => {
  return {
    videoSelected: state.videoSelected
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchVideos: fetchVideos }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
