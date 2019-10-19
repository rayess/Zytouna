import {ACTIVESTUDENT} from '../actions-types';
const initialState = {
  name: '',
};
const activeStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVESTUDENT: {
      return {
        ...state,
        name:action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default activeStudentReducer;
