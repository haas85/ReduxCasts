import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions/videoManager';
import Autocomplete from 'react-autocomplete';

function matchStateToTerm (state, value) {
  return (
      state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
};

function sortStates (a, b, value) {
  return (
      a.name.toLowerCase().indexOf(value.toLowerCase()) >
      b.name.toLowerCase().indexOf(value.toLowerCase()) ? 1 : -1
  )
};

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
    return (
      <div className="search-bar">
        <Autocomplete
            value={this.state.term}
            inputProps={{name: "Search Term", id: "video-term"}}
            items={this.props.videoSelected.history}
            getItemValue={(item) => item.name}
            shouldItemRender={matchStateToTerm}
            sortItems={sortStates}
            onChange={event => this.onInputChange(event.target.value)}
            onSelect={value => this.onInputChange(value)}
            renderItem={(item, isHighlighted) => (
                <div
                    style={isHighlighted ? styles.highlightedItem : styles.item}
                    key={item.abbr}
                >{item.name}</div>
            )}
        />
      </div>
    );
  }

  onInputChange(term) {
    // If we want to notify a change to an upper view without using redux we use data down actions up, so we need
    // to receive the function that receives data as a parameter
    this.setState({term});
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
