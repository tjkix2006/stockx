import * as constants from './constants';

export const initialState = {
  selectedShoe: null,
  shoes: {}
};

const shoes = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_SHOE:
      return {
        ...state,
        shoes: {
          ...state.shoes,
          [state.selectedShoe]: action.payload
        }
      }
    case constants.REMOVE_SHOE:
      return {
        ...state,
        shoes: {
          ...state.shoes,
          [state.selectedShoe]: null
        }
      }
    case constants.SELECT_SHOE:
      let selectedShoe = action.id;
      // If shoe is already selected, toggle it being selected
      if (state.selectedShoe === action.id) {
        selectedShoe = initialState.selectedShoe;
      }

      return {
        ...state,
        selectedShoe
      }
    default:
      return state
  }
}

export default shoes;
