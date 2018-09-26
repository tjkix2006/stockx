import reducer, { initialState } from './reducers';
import * as types from './constants';

const testShoe = {
  brand: 'Test brand', 
  style: 'Test style', 
  size: 'Test size', 
  UPC: 'Test UPC'
};

describe('Shoes reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('Should handle ADD_SHOE', () => {
    expect(reducer(Object.assign({}, initialState, {
      selectedShoe: 1
    }), {
      type: types.ADD_SHOE,
      payload: testShoe
    })).toEqual(
      {
        shoes: {
          [1]: testShoe
        },
        selectedShoe: 1
      }
    )
  })

  it('Should handle REMOVE_SHOE', () => {
    expect(reducer(Object.assign({}, initialState, {
      shoes: {
        [1]: testShoe
      },
      selectedShoe: 1
    }), {
      type: types.REMOVE_SHOE,
      id: 1
    })).toEqual(
      {
        shoes: {
          [1]: null
        },
        selectedShoe: 1
      }
    )
  })

  it('Should handle SELECT_SHOE when not toggling', () => {
    expect(reducer(Object.assign({}, initialState, {
      shoes: {
        [1]: testShoe
      }
    }), {
      type: types.SELECT_SHOE,
      id: 1
    })).toEqual(
      {
        shoes: {
          [1]: testShoe
        },
        selectedShoe: 1
      }
    )
  })

  it('Should handle SELECT_SHOE when toggling same shoe', () => {
    expect(reducer(Object.assign({}, initialState, {
      shoes: {
        [1]: testShoe
      },
      selectedShoe: 1
    }), {
      type: types.SELECT_SHOE,
      id: 1
    })).toEqual({
      shoes: {
        [1]: testShoe
      },
      selectedShoe: null
    })
  })
});
