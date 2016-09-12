import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions/videoManager';

import SearchBarTemp from './search_bar_template'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    let term = this.props.term || 'surfboard';
    this.state = { term: term, history: [term] , suggestions: []};
    this.props.fetchVideos(this.state.term);
    this.doSearch = _.debounce(this.doSearch.bind(this), 300);
    this.onInputChange = this.onInputChange.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.state.history.filter(term =>
        term.toLowerCase().slice(0, inputLength) === inputValue
    );
  }

  getSuggestionValue(suggestion) { // when suggestion is selected, this function tells
    return suggestion;                 // what should be the value of the input
  }

  renderSuggestion(suggestion) {
    return (<span>{suggestion}</span>);
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      history: []
    });
  }

  render() {

    const inputProps = {
      placeholder: 'Search Video',
      value: this.state.term,
      onChange: this.onInputChange
    };

    return SearchBarTemp.bind(this)(inputProps);
  }

  doSearch(term) {
    this.setState({
      history: [ ...this.state.history, term]
    });
    this.props.fetchVideos(term);
  }

  onInputChange(event, value) {
    let term = value.newValue;
    // If we want to notify a change to an upper view without using redux we use data down actions up, so we need
    // to receive the function that receives data as a parameter
    this.setState({
      term: term,
    });

    this.doSearch(term);
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
