import React from 'react';

import searchLogo from '../../search.svg';

export const SearchInput = ({onChange, searchQuery}) => (
  <div className="input">
    <img className="search-icon" src={searchLogo} alt="Search Logo" />
    <input id="search-text" value={searchQuery} onChange={(e) => onChange(e.target.value)} />
  </div>
);
