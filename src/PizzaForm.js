import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToppingsPicker from './ToppingsPicker';

class PizzaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: null,
      toppings: []
    };

    this.handleChange = this.handleChange.bind(this);
    this._isLessThanMaxToppings = this._isLessThanMaxToppings.bind(this);
    this.handleToppingsChange = this.handleToppingsChange.bind(this);
  }

  handleChange(event) {
    const defaultToppings = this.props.pizzaSizes.filter(pizzaSize => pizzaSize.name === event.target.value)[0].toppings.filter(topping => topping.defaultSelected);
    this.setState({
      [event.target.name]: event.target.value,
      toppings: defaultToppings
    });
  }

  _isLessThanMaxToppings() {
    const pizzaData = this.props.pizzaSizes.filter(size => size.name === this.state.size)[0];
    if (pizzaData.maxToppings === null) return true;

    return this.state.toppings.length < pizzaData.maxToppings;
  }

  handleToppingsChange(event) {
    let checkbox = event.target;
    const pizzaData = this.props.pizzaSizes.filter(size => size.name === this.state.size)[0];
    const topping = pizzaData.toppings.filter(topping => topping.topping.name === checkbox.value)[0];

      if (checkbox.checked) {
      if (this._isLessThanMaxToppings()) {
        this.setState(prevState => ({
          toppings: [...prevState.toppings, topping]
        }));
      }
      else {
        checkbox.checked = false;
      }
    }
    else {
      this.setState(prevState => ({
        toppings: prevState.toppings.filter(oldTopping => JSON.stringify(oldTopping) !== JSON.stringify(topping))
      }));
    }
  }


  render() {
    const pizzaPicker = this.props.pizzaSizes.map((size, index) => {
      return (
        <div key={index}>
          <input id={size.name} type='radio' name='size' value={size.name} />
          <label htmlFor={size.name}>{size.name}</label>
        </div>
      );
    });

    let pizzaData = null;
    if (this.state.size) {
      pizzaData = this.props.pizzaSizes.filter(size => size.name === this.state.size)[0];
    }
    return (
      <div>
        <h1>This is the Pizza Form!</h1>
        <fieldset onChange={this.handleChange}>
          {pizzaPicker}
        </fieldset>
        { this.state.size && <ToppingsPicker maxToppings={pizzaData.maxToppings} toppings={pizzaData.toppings} handleChange={this.handleToppingsChange} selectedToppings={this.state.toppings.map(topping => topping.topping.name)} /> }
      </div>
    );
  }
}

PizzaForm.propTypes = {
  pizzaSizes: PropTypes.array.isRequired
}

export default PizzaForm;
