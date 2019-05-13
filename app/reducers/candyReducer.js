import {dummyData} from '../DummyData'

const initialState = dummyData

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_CANDIES':
    return {candy: action.candies }
    default:
      return state;
  }
};

export { candyReducer };
