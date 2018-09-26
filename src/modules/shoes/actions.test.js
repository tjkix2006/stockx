import * as actions from './actions'
import * as constants from './constants';

describe('actions', () => {
  it('should create an action to add a shoe', () => {
    const payload = {
      brand: 'Test brand', 
      style: 'Test style', 
      size: 'Test size', 
      UPC: 'Test UPC'
    };
    const expectedAction = {
      type: constants.ADD_SHOE,
      payload
    };

    expect(actions.addShoe(payload)).toEqual(expectedAction)
  })

  it('should create an action to remove a shoe', () => {
    const expectedAction = {
      type: constants.REMOVE_SHOE
    };

    expect(actions.removeShoe()).toEqual(expectedAction)
  })

  it('should create an action to select a shoe', () => {
    const id = 12;
    const expectedAction = {
      type: constants.SELECT_SHOE,
      id
    };

    expect(actions.selectShoe(id)).toEqual(expectedAction)
  })
})
