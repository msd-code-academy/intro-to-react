import React from 'react';

import {SearchButtons} from './SearchButtons';
import {SearchInput} from './SearchInput';
import {Results} from './Results';
import {ResultItem} from './ResultsItem';

import '../../index.css';

// Každá funkce s označením async vrací promise
const fetchJokes = async (query) => {
  const url = `https://api.chucknorris.io/jokes/search?query=${query}`;

  const response = await fetch(url);
  const responseJSON = await response.json();

  return responseJSON.result || [];
};

// API vrátí výsledky ve tvaru:
// [
//   {
//     created_at: "2020-01-05 13:42:18.823766",
//     icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//     id: "MlP1e4owRr-PyO9kIqlAfg",
//     updated_at: "2020-01-05 13:42:18.823766",
//     url: "https://api.chucknorris.io/jokes/MlP1e4owRr-PyO9kIqlAfg",
//     value: "Chuck ..."
//   },
//   {
//     created_at: "2020-01-05 13:42:18.823766",
//     icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//     id: "_uptxt8mrfsimgnvopym3q",
//     updated_at: "2020-01-05 13:42:18.823766",
//     url: "https://api.chucknorris.io/jokes/_uptxt8mrfsimgnvopym3q",
//     value: "Chuck ..."
//   },
// ]

export class App extends React.Component {
  state = {
    searchQuery: '',
    jokes: [],
    jokesAreLoading: false,
    jokesLoadingError: null
  };

  handleSearchClick = async () => {
    try {
      this.setState({
        jokesAreLoading: true
      });

      const fetchedJokes = await fetchJokes(this.state.searchQuery);

      this.setState({
        jokesAreLoading: false,
        jokes: fetchedJokes
      });
    } catch (error) {
      this.setState({
        jokesAreLoading: false,
        jokesLoadingError: error.message
      });
    }
  };

  handleInputChange = (text) => {
    this.setState({searchQuery: text});
  };

  render() {
    const {searchQuery, jokesAreLoading, jokesLoadingError, jokes} = this.state;

    return (
      <div className="App">
        <header>
          <span>Chuck Norris Jokes</span>
        </header>
        <div>
          <div>
            <div className="logo"></div>
            <SearchInput onChange={this.handleInputChange} searchQuery={searchQuery} />
            <SearchButtons onSearch={this.handleSearchClick} />
          </div>
        </div>
        <Results
          searchQuery={searchQuery}
          loading={jokesAreLoading}
          error={jokesLoadingError}>
          {jokes.map((result) => {
            return (
              <ResultItem
                key={result.id}
                link={result.url}
                title={`${result.value.substring(0, 30)}...`}
                description={result.value}
              />
            );
          })}
        </Results>
      </div>
    );
  }
}
