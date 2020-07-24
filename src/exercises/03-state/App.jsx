import React from 'react';

import searchLogo from '../../search.svg'
import '../../index.css'

export class App extends React.Component {

  state = {
    searchText: 'abc'
  }
  render() {
    return (
      <div className="App">
        <header>
          <img />
          <span>Gmail</span>
        </header>
        <div>
          <div>
            <div className="logo"></div>
            <div className="input">
              <img className="search-icon" src={searchLogo} />
              <input id="search-text" value={this.state.searchText} onChange={(e) => this.setState({searchText: e.target.value})} />
            </div>
            <div className="buttons">
              <button id="search-button">Google Search</button>
              <button>I'm Feeling Lucky</button>
            </div>
          </div>
        </div>
        <div>
          <h2>Results for <span id="search-text-results">{this.state.searchText}</span></h2>
        </div>
      </div>
    );
  }
}
