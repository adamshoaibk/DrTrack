import {ADD_DATA} from '../Types';

const initialState = {
  diabetesData: [],
};

const sortItemByKey = (filteredList, key = 'date') => {
  const clonedItems = filteredList.map(item => ({...item}));
  clonedItems.sort(compare);
  function compare(a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  }
  return clonedItems;
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
      let sortedList = sortItemByKey(filteredList);
      return {
        ...state,
        diabetesData: sortedList,
      };
    default:
      return state;
  }
};

export default diabetesReducer;
