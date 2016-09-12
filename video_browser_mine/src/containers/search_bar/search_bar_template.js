import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';


export default function(inputProps) {
    return (
        <div className="search-bar">
            <Autosuggest
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps} />
        </div>
    );
}