import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setPizzaSize, setDefaultToppings } from '../actions';


class PizzaSizePicker extends Component {
  handleSizeSelect = (event) => {
    const pizzaSizeObj = this.props.sizes.filter(sizeObj => sizeObj.name === event.target.value)[0];
    const defaultToppings = pizzaSizeObj.toppings.filter(toppingObj => toppingObj.defaultSelected);
    this.props.setPizzaSize(pizzaSizeObj);
    this.props.setDefaultToppings(defaultToppings);
  }
  
  render() {
    const sizeInputs = this.props.sizes.map((size, index) => {
      return (
        <div key={index}>
          <input id={size.name} type='radio' name='size' value={size.name} />
          <label htmlFor={size.name}>{size.name}</label>
        </div>
      );
    });

    return (
      <fieldset onChange={this.handleSizeSelect}>
        {sizeInputs}
        <h3>Base Price</h3>
        <p>{this.props.size.basePrice ? `$${this.props.size.basePrice}` : '$0.00'}</p>
      </fieldset>
    );
  }
}

PizzaSizePicker.propTypes = {
  sizes: PropTypes.array.isRequired,
  size: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  size: state.pizza.size
});

export default connect(mapStateToProps, { setPizzaSize, setDefaultToppings })(PizzaSizePicker);
