import React from 'react';

export class Results extends React.Component {
  render() {
    const {searchQuery, children} = this.props;

    return (
      <div className="results">
        <h2>
          Results for <span id="search-text-results">{searchQuery}</span>
        </h2>
        <div className="results__list">{children}</div>
      </div>
    );
  }
}
