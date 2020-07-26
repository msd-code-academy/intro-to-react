import React from 'react';

import { SearchButtons } from './SearchButtons'
import { SearchInput } from './SearchInput'

import '../../index.css'

export class App extends React.Component {

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
            <SearchInput></SearchInput>
            <SearchButtons></SearchButtons>
          </div>
        </div>
        <div>
          <h2>Results for <span id="search-text-results">abc</span></h2>

          <div className="results">
            <ul>
              <li>
                <a href="#"><h3>Result 1</h3></a>
                <div>Nostrud irure ut ullamco dolor nostrud elit sint nulla minim laborum. Tempor amet magna aliqua labore voluptate eiusmod consectetur. Sint ex elit quis anim exercitation laboris deserunt excepteur. Quis aliquip dolore cillum proident.</div>
              </li>
              <li>
                <a href="#"><h3>Result 2</h3></a>
                <div>Lorem aute laborum et pariatur cupidatat officia occaecat nisi deserunt anim quis est. Tempor consectetur aliqua adipisicing ex consequat Lorem eu velit sit. Eiusmod quis nisi commodo sit ullamco tempor ea laboris est mollit est. Eiusmod minim est ex do aute magna mollit ullamco. Magna do anim in cillum laboris in consequat excepteur. Qui excepteur nostrud nisi deserunt. Do veniam cupidatat velit sit officia mollit aliquip ut sint dolore commodo sunt laborum dolor.</div>
              </li>
              <li>
                <a href="#"><h3>Result 3</h3></a>
                <div>Eu cillum exercitation cillum veniam. Mollit ut qui quis est incididunt. Dolor et duis anim consequat voluptate aute tempor occaecat. Id ea ipsum cillum esse consectetur sit.</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
