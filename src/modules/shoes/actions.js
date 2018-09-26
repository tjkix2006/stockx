import * as constants from './constants';

export const addShoe = (payload) => ({
  type: constants.ADD_SHOE,
  payload
});

export const removeShoe = () => ({
  type: constants.REMOVE_SHOE
});

export const selectShoe = (id) => ({
  type: constants.SELECT_SHOE,
  id
});
