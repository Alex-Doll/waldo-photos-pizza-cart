import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToppingsPicker extends Component {
  render() {
    const toppingsCheckboxes = this.props.toppings.map((topping, index) => {
      return (<div key={index}>
        <input type='checkbox' id={topping.topping.name} value={topping.topping.name} name='toppings' checked={this.props.selectedToppings.includes(topping.topping.name)} onChange={this.props.handleChange} />
        <label htmlFor={topping.topping.name}>{topping.topping.name}{topping.defaultSelected ? 'TRUE' : 'FALSE'}</label>
      </div>);
    });
    
    return (
      <div>
        <h2>Max Toppings {this.props.maxToppings === null ? 'Inf' : this.props.maxToppings}</h2>
        <fieldset>
          {toppingsCheckboxes}
        </fieldset>
      </div>
    );
  }
}

ToppingsPicker.propTypes = {
  maxToppings: PropTypes.number,
  toppings: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ToppingsPicker;
