import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return (
      <div>
        <h1>This is the Pizza Form!</h1>
        <fieldset onChange={this.handleChange}>
          {pizzaPicker}
        </fieldset>
      </div>
    );
  }
}

PizzaForm.propTypes = {
  pizzaSizes: PropTypes.array.isRequired
}

export default PizzaForm;
