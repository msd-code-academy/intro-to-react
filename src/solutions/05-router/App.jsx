import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import {SearchButtons} from './SearchButtons';
import {SearchInput} from './SearchInput';
import {Results} from './Results';
import {ResultItem} from './ResultsItem';
import {Gmail} from './Gmail';

import '../../index.css';

const fetchResultsFromAPI = async () => {
  const response = await fetch('https://myslenkynezastavis.cz?searchQuery=abc');
  const result = await response.json();

  return result;
};

export class App extends React.Component {
  state = {
    searchQuery: '',
    loading: false,
    error: null,
    results: []
  };

  handleInputChange = (text) => {
    this.setState({searchQuery: text});
  };

  handleSearchClick = async () => {
    try {
      this.setState({
        loading: true,
        // musíme vyresetovat chybu z předchozích stahování
        error: null
      });
      const fetchResult = await fetchResultsFromAPI();
      this.setState({
        loading: false,
        results: fetchResult
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message
      });
    }
  };

  render() {
    const {loading, error, results, searchQuery} = this.state;

    return (
      <Router>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Search</Link>
                </li>
                <li>
                  <Link to="/gmail">
                    <img />
                    Gmail
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <div>
            <Switch>
              <Route exact path="/">
                <div>
                  <div className="logo"></div>
                  <SearchInput
                    onChange={this.handleInputChange}
                    searchQuery={searchQuery}
                  />
                  <SearchButtons onSearch={this.handleSearchClick} />
                </div>
                <Results searchQuery={searchQuery} loading={loading} error={error}>
                  {results.map((result) => {
                    return (
                      <ResultItem
                        key={result.link}
                        link={result.link}
                        title={result.title}
                        description={result.description}
                      />
                    );
                  })}
                </Results>
              </Route>
              <Route path="/gmail">
                <Gmail />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
