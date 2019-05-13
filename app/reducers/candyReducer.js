import { dummyData } from "../DummyData";

const initialState = dummyData;

const REQUEST_CANDIES = "REQUEST_CANDIES";

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CANDIES:
      return { candy: action.candies };
    default:
      return state;
  }
};

export { candyReducer };
