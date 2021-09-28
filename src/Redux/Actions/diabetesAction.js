import {ADD_DATA} from '../Types';

export const addDiabetesData = data => {
  return dispatch => {
    dispatch({
      type: ADD_DATA,
      payload: data,
    });
  };
};
