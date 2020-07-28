import React from 'react';

import {SearchButtons} from './SearchButtons';
import {SearchInput} from './SearchInput';

import '../../index.css';

/**
 * Cvičení:
 * Vidíme, že ve výsledcích vyhledávání se již hodně v kódu opakujeme. Proto:
 *
 * - vytvořte komponentu <ResultItem /> a použijte jí místo <div> tagů
 * - předejte komponentě ResultItem tři propsy - link, title a description
 *
 * - vytvořte komponentu <Results />, zabalte do ní v hlavní komponentě
 *   komponenty <ResultItem /> a přidejte jí propsu searchQuery tak, aby výsledná
 *   struktura vypadala takto:
 *
 *   <Results searchQuery="abc">
 *     <ResultItem link="..." title="..." description="" />
 *     <ResultItem link="..." title="..." description="" />
 *     <ResultItem link="..." title="..." description="" />
 *   </Results>
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
        <div className="results">
          <h2>
            Results for <span id="search-text-results">abc</span>
          </h2>

          <div className="results__list">
            <div className="results__list-item">
              <a href="/Result-1">
                <h3 className="results__list-title">Czech Magazine for Youth</h3>
              </a>
              <div className="results__list-description">
                ABC is a favorite Czech magazine for children that focuses on science and
                technology. It&apos;s purpose is to both educate children as well as get
                them excited about science and nature.
              </div>
            </div>
            <div className="results__list-item">
              <a href="/Result-2">
                <h3 className="results__list-title">TV Station</h3>
              </a>
              <div className="results__list-description">
                ABC is an American Broadcasting Company, a flagship property of Walt
                Disney Television, a subsidiary of the Disney Media Networks division of
                The Walt Disney Company. It has headquarter in Burbank, California.
              </div>
            </div>
            <div className="results__list-item">
              <a href="/Result-3">
                <h3 className="results__list-title">First Letters of Alphabet</h3>
              </a>
              <div className="results__list-description">
                ABC are first letters of the alphabet. English alphabet consists of 26
                letters and it originated around the 7th century from the Latin script.
                The word alphabet is a compound of first two letters of greek alphabet -
                alpha and beta.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
