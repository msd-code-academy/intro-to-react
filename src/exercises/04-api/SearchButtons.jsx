import React from 'react';

export const SearchButtons = ({onSearch}) => (
  <div className="buttons">
    <button id="search-button" onClick={onSearch}>Google Search</button>
    <button>I&apos;m Feeling Lucky</button>
  </div>
);
