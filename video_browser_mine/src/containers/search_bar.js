import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions/videoManager';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: this.props.term || 'surfboard' };
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
    this.setState({term});
    this.props.fetchVideos(term);
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchVideos: fetchVideos }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
