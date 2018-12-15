import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removePizzaFromCart } from '../actions';

class Cart extends Component {
  getCartCost = () => {
    let cartCost = 0;
    this.props.cart.forEach(pizza => {
      const toppingsCost = pizza.toppings.reduce((acc, toppingObj) => acc + toppingObj.topping.price, 0);
      cartCost += pizza.size.basePrice + toppingsCost;
    });

    return cartCost;
  }
  render() {
    return (
      <div>
        <h3>Your Pizza Cart!</h3>
        {this.props.cart.map((pizza, index) => (
          <div key={index}>
            <h4>{pizza.size.name} at ${pizza.size.basePrice.toFixed(2)}</h4>
            <ul>
              {pizza.toppings.map((topping, index) => (
                <li key={index}>{topping.topping.name} at ${topping.topping.price.toFixed(2)}</li>
              ))}
            </ul>
            <h4>Total Cost: ${pizza.toppings.reduce((acc, topping) => acc + topping.topping.price, pizza.size.basePrice).toFixed(2)}</h4>
            <button onClick={this.props.removePizzaFromCart.bind(this, pizza)}>Remove from cart</button>
          </div>
        ))}
      <h3>Total Cost of Cart: ${this.getCartCost.call(this).toFixed(2)}</h3>
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  removePizzaFromCart: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps, { removePizzaFromCart })(Cart);
