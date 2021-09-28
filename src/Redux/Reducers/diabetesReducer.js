import {ADD_DATA} from '../Types';
import moment from 'moment';

const initialState = {
  diabetesData: [],
};

const diabetesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      // Login to replace the data if user have added to the same date
      let filteredList = state.diabetesData;
      if (filteredList.length === 0) {
        filteredList.push(action.payload);
      } else {
        let index = filteredList.findIndex(
          ele => ele.dateKey === action.payload.dateKey,
        );
        if (index !== -1) {
          filteredList.splice(index, 1);
          filteredList.push(action.payload);
        } else {
          filteredList.push(action.payload);
        }
      }
      return {
        ...state,
        diabetesData: filteredList,
      };
    default:
      return state;
  }
};

export default diabetesReducer;
