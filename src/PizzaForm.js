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
    return (
      <div>
        <h1>This is the Pizza Form!</h1>
        <PizzaSizePicker sizes={this.props.pizzaData} />
        { this.props.pizzaSize.name &&
          (
            <ToppingsPicker
              maxToppings={this.props.pizzaSize.maxToppings}
              availableToppings={this.props.pizzaSize.toppings}
            />
          )
        }
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
