import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setPizzaSize } from './store';


class PizzaSizePicker extends Component {
  handleSizeSelect = (event) => {
    const pizzaSizeName = event.target.value;
    this.props.setPizzaSize(pizzaSizeName);
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
        <p>{this.props.size.basePrice ? this.props.size.basePrice : '$0.00'}</p>
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

export default connect(mapStateToProps, { setPizzaSize })(PizzaSizePicker);
