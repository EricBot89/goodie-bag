import {dummyData} from '../DummyData'

const initialState = dummyData

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { candyReducer };
