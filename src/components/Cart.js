import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removePizzaFromCart } from './store';

class Cart extends Component {
  render() {
    return (
      <div>
        <h3>Your Pizza Cart!</h3>
        {this.props.cart}
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  removePizzaFromCart: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cart: state.cart.map(pizza => pizza.size.name)
});

export default connect(mapStateToProps, { removePizzaFromCart })(Cart);
