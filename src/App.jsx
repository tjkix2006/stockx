import React, { Component } from 'react';
import { Provider } from 'react-redux';
import InventoryForm from './components/InventoryForm';
import InventoryShelf from './components/InventoryShelf';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import shoes from './modules/shoes/reducers';

let store = createStore(shoes);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">StockX Challenge</h1>
          </header>
          <div className="App-content">
            <InventoryForm />
            <InventoryShelf />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
