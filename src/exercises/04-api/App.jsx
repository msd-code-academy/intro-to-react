import React from 'react';

import {SearchButtons} from './SearchButtons';
import {SearchInput} from './SearchInput';
import {Results} from './Results';
import {ResultItem} from './ResultsItem';

import '../../index.css';

// fetch('https://myslenkynezastavis.cz?searchQuery=abc').then((result) => result.json()).then(console.log);

/**
 * Cvičení:
 *
 *
 *  */

 const resultsFromAPI = [
  {
    link: '/Result-1',
    title: 'Czech Magazine for Youth',
    description: `ABC is a favorite Czech magazine for children that focuses on science and technology. It's purpose is to both educate children as well as get them excited about science and nature.`
  },
  {
    link: '/Result-2',
    title: 'TV Station',
    description: 'ABC is an American Broadcasting Company, a flagship property of Walt Disney Television, a subsidiary of the Disney Media Networks division of The Walt Disney Company. It has headquarter in Burbank, California.'
  },
  {
    ink: '/Result-3',
    title: 'First Letters of Alphabet',
    description: 'ABC are first letters of the alphabet. English alphabet consists of 26 letters and it originated around the 7th century from the Latin script. The word alphabet is a compound of first two letters of greek alphabet - alpha and beta.'
  }
]

export class App extends React.Component {
  state = {
    searchQuery: '',
    results: []
  };

  handleInputChange = (text) => {
    this.setState({searchQuery: text});
  };

  handleSearchClick = () => {
    this.setState({results: resultsFromAPI});
  };

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
            <SearchInput onChange={this.handleInputChange} searchQuery={this.state.searchQuery} />
            <SearchButtons onSearch={this.handleSearchClick} />
          </div>
        </div>
        <Results searchQuery={this.state.searchQuery}>
          {this.state.results.map((result) => {
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
