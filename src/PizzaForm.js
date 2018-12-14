import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToppingsPicker from './ToppingsPicker';
import PizzaSizePicker from './PizzaSizePicker';
import { connect } from 'react-redux';
import { setPizzaData, setPizzaSize, addPizzaTopping, removePizzaTopping } from './store';

class PizzaForm extends Component {
  constructor(props) {
    super(props);
    this.props.setPizzaData(this.props.pizzaData);
  }

  render() {
    let pizzaData = null;
    if (this.props.pizzaSize) {
      pizzaData = this.props.pizzaData.filter(size => size.name === this.props.pizzaSize)[0];
    }
    return (
      <div>
        <h1>This is the Pizza Form!</h1>
        <PizzaSizePicker sizes={this.props.pizzaData} />
        { /* this.props.pizzaSize && <ToppingsPicker maxToppings={pizzaData.maxToppings} toppings={pizzaData.toppings} handleChange={this.handleToppingsChange} selectedToppings={this.state.toppings.map(topping => topping.topping.name)} />  */}
      </div>
    );
  }
}

PizzaForm.propTypes = {
  pizzaData: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  pizzaSize: state.pizza.size
});

export default connect(mapStateToProps, { setPizzaData, setPizzaSize, addPizzaTopping, removePizzaTopping })(PizzaForm);
