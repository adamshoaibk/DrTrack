import diabetesReducer from './diabetesReducer';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  diabetesData: diabetesReducer,
});

const configureStore = createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
