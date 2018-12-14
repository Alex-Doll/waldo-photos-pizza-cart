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
  }

  handleChange(event) {
    const toppingName = event.target.value;
    if (event.target.checked) {
      this.setState(prevState => ({
        toppings: [...prevState.toppings, toppingName]
      }));
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
