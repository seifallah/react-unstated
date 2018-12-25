import React, { Component } from 'react';
import './App.css';
//import CounterComponent from './CounterComponent';

import { Subscribe } from 'unstated'
import { BooksContainer } from './BooksContainer'
import AppContainer from './AppContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Subscribe to={[BooksContainer]}>
          {(bookStore) => (
            <AppContainer
              bookStore={bookStore}
            />
          )}
      </Subscribe>
        </header>
      </div>
    );
  }
}

export default App;
