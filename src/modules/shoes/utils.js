export const selectedShoe = (state) => {
  let shoe = null;

  if (state.selectedShoe !== null) {
    shoe = state.shoes[state.selectedShoe];
  }
  
  return shoe;
};
