import candyReducer from "./candyReducer";
import { combineReducers } from "redux";

const initialState = {};

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  defaultReducer,
  candyReducer
});

export { rootReducer };
