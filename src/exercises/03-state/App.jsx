import React from 'react';

import {SearchButtons} from './SearchButtons';
import {SearchInput} from './SearchInput';
import {Results} from './Results';
import {ResultItem} from './ResultsItem';

import '../../index.css';

// const resultsFromAPI = [
//   {
//     link: '/Result-1',
//     title: 'Czech Magazine for Youth',
//     description: `ABC is a favorite Czech magazine for children that focuses on science and technology. It's purpose is to both educate children as well as get them excited about science and nature.`
//   },
//   {
//     link: '/Result-2',
//     title: 'TV Station',
//     description: 'ABC is an American Broadcasting Company, a flagship property of Walt Disney Television, a subsidiary of the Disney Media Networks division of The Walt Disney Company. It has headquarter in Burbank, California.'
//   },
//   {
//     ink: '/Result-3',
//     title: 'First Letters of Alphabet',
//     description: 'ABC are first letters of the alphabet. English alphabet consists of 26 letters and it originated around the 7th century from the Latin script. The word alphabet is a compound of first two letters of greek alphabet - alpha and beta.'
//   }
// ]

/**
 * Cvičení:
 *
 *
 *  */

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
            <SearchInput />
            <SearchButtons />
          </div>
        </div>
        <Results searchQuery="abc">
          <ResultItem
            link="/Result-1"
            title="Czech Magazine for Youth"
            description="ABC is a favorite Czech magazine for children that focuses on science and technology. It's purpose is to both educate children as well as get them excited about science and nature."
          />
          <ResultItem
            link="/Result-2"
            title="TV Station"
            description="ABC is an American Broadcasting Company, a flagship property of Walt Disney Television, a subsidiary of the Disney Media Networks division of The Walt Disney Company. It has headquarter in Burbank, California."
          />
          <ResultItem
            link="/Result-3"
            title="First Letters of Alphabet"
            description="ABC are first letters of the alphabet. English alphabet consists of 26 letters and it originated around the 7th century from the Latin script. The word alphabet is a compound of first two letters of greek alphabet - alpha and beta."
          />
        </Results>
      </div>
    );
  }
}
