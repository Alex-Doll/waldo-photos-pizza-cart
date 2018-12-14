import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    return (
      <h3>Your Pizza Cart!</h3>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps, null)(Cart);
