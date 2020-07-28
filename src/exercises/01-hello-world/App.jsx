import React from 'react';

import searchLogo from '../../search.svg'
import '../../index.css'

export class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <img alt="Logo" />
          <span>Gmail</span>
        </header>
        <div>
          <div>
            <div className="logo"></div>
            <div className="input">
              <img className="search-icon" src={searchLogo} alt="Search Logo"/>
              <input id="search-text" value="abc" />
            </div>
            <div className="buttons">
              <button id="search-button">Google Search</button>
              <button>I'm Feeling Lucky</button>
            </div>
          </div>
        </div>
        <div>
          <h2>Results for <span id="search-text-results">abc</span></h2>

          {/* TODO: add few static search results shown in a <table></table> */}

        </div>
      </div>
    );
  }
}
