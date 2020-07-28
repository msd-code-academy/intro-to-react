import React from 'react';

import searchLogo from '../../search.svg';

export const SearchInput = () => (
  <div className="input">
    <img className="search-icon" src={searchLogo} />
    <input id="search-text" value="abc" />
  </div>
);
