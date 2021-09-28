import diabetesReducer from './diabetesReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  diabetesData: diabetesReducer,
});

export default rootReducer;
