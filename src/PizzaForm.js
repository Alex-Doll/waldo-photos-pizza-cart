import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToppingsPicker from './ToppingsPicker';

class PizzaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
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
        { this.state.size && <ToppingsPicker maxToppings={pizzaData.maxToppings} toppings={pizzaData.toppings} /> }
      </div>
    );
  }
}

PizzaForm.propTypes = {
  pizzaSizes: PropTypes.array.isRequired
}

export default PizzaForm;
