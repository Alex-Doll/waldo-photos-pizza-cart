import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const MAIN_QUERY = gql`
  {
    pizzaSizes {
      name
      maxToppings
      toppings {
        topping {
          name
          price
        }
        defaultSelected
      }
      basePrice
    }
  }
`;


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
          <Query query={MAIN_QUERY}>
            {
              ({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>;
                if (error) return <div>Error</div>;
                console.log(data);
                return <div>Success!</div>
              }
            }
          </Query>
        </div>
      </Provider>
    );
  }
}

export default App;
