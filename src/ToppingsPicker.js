import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToppingsPicker extends Component {
  constructor(props) {
    super(props);

    const defaultToppings = this.props.toppings.filter(topping => topping.defaultSelected).map(topping => topping.topping.name);
    
    this.state = {
      toppings: defaultToppings
    };

    this.handleChange = this.handleChange.bind(this);
    this._isLessThanMaxToppings = this._isLessThanMaxToppings.bind(this);
  }

  _isLessThanMaxToppings() {
    if (this.props.maxToppings === null) return true;

    return this.state.toppings.length < this.props.maxToppings;
  }

  handleChange(event) {
    let checkbox = event.target;
    const toppingName = event.target.value;

    if (checkbox.checked) {
      if (this._isLessThanMaxToppings()) {
        this.setState(prevState => ({
          toppings: [...prevState.toppings, toppingName]
        }));
      }
      else {
        checkbox.checked = false;
      }
    }
    else {
      this.setState(prevState => ({
        toppings: prevState.toppings.filter(topping => topping !== toppingName)
      }));
    }
    
  }

  render() {
    const toppingsCheckboxes = this.props.toppings.map((topping, index) => {
      return (<div key={index}>
        <input type='checkbox' id={topping.topping.name} value={topping.topping.name} name='toppings' defaultChecked={topping.defaultSelected} onChange={this.handleChange} />
        <label htmlFor={topping.topping.name}>{topping.topping.name}</label>
      </div>);
    });
    
    return (
      <div>
        <h2>Max Toppings {this.props.maxToppings}</h2>
        <fieldset>
          {toppingsCheckboxes}
        </fieldset>
      </div>
    );
  }
}

ToppingsPicker.propTypes = {
  maxToppings: PropTypes.number,
  toppings: PropTypes.array.isRequired
};

export default ToppingsPicker;
