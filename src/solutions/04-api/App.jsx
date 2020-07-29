import React from 'react';

import {SearchButtons} from './SearchButtons';
import {SearchInput} from './SearchInput';
import {Results} from './Results';
import {ResultItem} from './ResultsItem';

import '../../index.css';

const fetchResultsFromAPI = async () => {
  const response = await fetch('https://myslenkynezastavis.cz?searchQuery=abc');
  const result = await response.json();

  return result;
}

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
    try{
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
      <div className="App">
        <header>
          <img alt="Logo" />
          <span>Gmail</span>
        </header>
        <div>
          <div>
            <div className="logo"></div>
            <SearchInput onChange={this.handleInputChange} searchQuery={searchQuery} />
            <SearchButtons onSearch={this.handleSearchClick} />
          </div>
        </div>
        <Results searchQuery={searchQuery} loading={loading} error={error}>
          {results.map((result) => {
            return <ResultItem key={result.link}
                link={result.link}
                title={result.title}
                description={result.description}
              />
          })}
        </Results>
      </div>
    );
  }
}
