import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addPizzaTopping, removePizzaTopping } from '../actions';

class ToppingsPicker extends Component {
  _isLessThanMaxToppings() {
    if (this.props.maxToppings === null) return true;

    return this.props.selectedToppings.length < this.props.maxToppings;
  }

  handleToggleTopping = (event) => {
    const topping = this.props.availableToppings.filter(topping => topping.topping.name === event.target.value)[0];

    if (event.target.checked) {
      if (this._isLessThanMaxToppings()) {
        this.props.addPizzaTopping(topping);
      }
    }
    else {
      this.props.removePizzaTopping(topping);
    }
  }

  
  render() {
    const checkboxes = this.props.availableToppings.map((toppingData, index) => (
      <div key={index}>
        <input
          type='checkbox'
          id={toppingData.topping.name}
          value={toppingData.topping.name}
          name='toppings'
          checked={this.props.selectedToppingsNames.includes(toppingData.topping.name)}
          onChange={this.handleToggleTopping}
        />
        <label htmlFor={toppingData.topping.name}>
          {toppingData.topping.name}
        </label>
      </div>
    ));
    
    return (
      <div>
        <h2>Max Toppings {this.props.maxToppings === null ? 'Inf' : this.props.maxToppings}</h2>
        <fieldset>
          {checkboxes}
        </fieldset>
      </div>
    );
  }
}

ToppingsPicker.propTypes = {
  maxToppings: PropTypes.number,
  availableToppings: PropTypes.array.isRequired,
  selectedToppings: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  selectedToppingsNames: state.pizza.toppings.map(toppingObj => toppingObj.topping.name),
  selectedToppings: state.pizza.toppings
});

export default connect(mapStateToProps, {addPizzaTopping, removePizzaTopping })(ToppingsPicker);
