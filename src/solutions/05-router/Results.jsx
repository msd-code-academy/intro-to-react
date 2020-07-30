import React from 'react';

export class Results extends React.Component {
  render() {
    const {searchQuery, loading, error, children} = this.props;

    if (loading) {
      return <div className="results__loader">Loading ...</div>;
    }

    if (error) {
      return <div className="results__error">{error}</div>;
    }

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
