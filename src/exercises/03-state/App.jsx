import React from 'react';

import {SearchButtons} from './SearchButtons';
import {SearchInput} from './SearchInput';
import {Results} from './Results';
import {ResultItem} from './ResultsItem';

import '../../index.css';

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
    link: '/Result-3',
    title: 'First Letters of Alphabet',
    description: 'ABC are first letters of the alphabet. English alphabet consists of 26 letters and it originated around the 7th century from the Latin script. The word alphabet is a compound of first two letters of greek alphabet - alpha and beta.'
  }
]

/**
 * Cvičení:
 * 1) vytvořte nový state v App.jsx, který bude obsahovat pole prázdné "results"
 * 2) do komponenty SearchButtons přidejte props "onSearch", . Zavolejte onSearch po kliknuti na tlacitko.
 *   - Toho muzete docilit pomoci atributu onClick na tlacitku <button>. Napriklad takto:
 *   - <button id="search-button" onClick={onSearch}>Google Search</button>
 * 3) v App.jsx vytvorte novou funkci "handleSearchClick" a pouzijte ji jako props v SearchButtons:
 * - <SearchButtons onSearch={this.handleSearchClick} />
 * 4) v tele funkce handleSearchClick nastavte hodnotu "results" v state vysledky vyhledavani z promenne resultsFromAPI nad timto textem
 * 5) pouzijte "results" ze state na misto "hard-coded" vysledku v teto komponente
 *   - napoveda, kdykoliv potrebujete projit pole objektu a na kazdy prvek pole vykreslit nejakou komponentu, pouzijte funkci "map", kterou ma kazde pole
 *   - napriklad takto this.state.results.map((result) => {result.desciption})
 *  */

export class App extends React.Component {

  // 1) zde inicializujte stav. Bud pomoci konstruktoru nebo class fieldu
  // stav by mel mit jeden prvek, prazdne pole "results"

  // 3) vytvorte novou funkci handleSearchClick
  // 4) pomoci this.setState() nastavte ve funkci "results" na "resultsFromAPI"

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
            {/* 2) do SearchButtons pridejte novou props onSearch */}
            <SearchButtons />
          </div>
        </div>
        {/* 5) pouzijte this.state.results k vykresleni vysledku dynamicky z promenne */}
        {/* vyuzijte metodu map: this.state.results.map(result => <ResultItem>) */}
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
