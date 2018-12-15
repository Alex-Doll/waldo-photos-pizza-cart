export const cart = (state, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART:
      let newState6 = Object.assign({}, state);
      console.log(action.pizza);
      newState6.cart.push(action.pizza);
      return newState6;
    case REMOVE_PIZZA_FROM_CART:
      let newState7 = Object.assign({}, state);
      newState7.cart = state.cart.filter(pizza => JSON.stringify(pizza) !== JSON.stringify(action.pizza))
      return newState7;
    default:
      return state;
  }
}
