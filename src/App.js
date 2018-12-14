import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';

class App extends Component {
  render() {
    const rootReducer = (state, action) => {
      return state;
    };
    const initialState = {};
    const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return (
      <Provider store={store}>
      <div className="App">
        <h1>Waldo Photos Pizza Cart</h1>
      </div>
      </Provider>
    );
  }
}

export default App;
