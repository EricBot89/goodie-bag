import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import axios from 'axios'
import {rootReducer} from './reducers'
//import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk


const getCandies = (candies) => {return {type: REQUEST_CANDIES, candies}}

const getServerCandies = () => {
  return async () => {
    try{
    const response = axios.get('/api/candy');
    const candyData = response.data;
    return getCandies(candyData)
    } catch (err) {
    //DO SOMETHING HERE MAYBE?
    }
  }
}


const loggingMiddleware = ({dispatch, getState }) => {
  return next => action => {
    console.log(getState())
    next(action)
    console.log(getState())
  }
}

const candyStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
  ))
)


export {candyStore, getServerCandies}
