import React, { Component } from 'react';
import { Provider } from 'react-redux';
import '../styles/App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PizzaForm from './PizzaForm';
import Cart from './Cart';
import { store } from '../store';

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
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Waldo Photos Pizza Cart</h1>
          <Query query={MAIN_QUERY}>
            {
              ({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>;
                if (error) return <div>Error</div>;

                return <PizzaForm pizzaData={data.pizzaSizes} />;
              }
            }
          </Query>
          <Cart />
        </div>
      </Provider>
    );
  }
}

export default App;
