import {SAVESTUDENT} from '../actions-types/save-student';
import {ADDSTUDENTSUCCESS} from '../actions-types/add-student-success';
import {ADDSTUDENTFAIL} from '../actions-types/add-student-fail';
const initialState = {
  error: '',
  loading: false,
  name:'',
  downloadURL:'',
};
const studentStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVESTUDENT: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADDSTUDENTFAIL: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case ADDSTUDENTSUCCESS: {
      return {
        ...state,
        loading: false,
        name:action.payload.name,
        downloadURL:action.payload.downloadURL,

      };
    }
    default: {
      return state;
    }
  }
};
export default studentStateReducer;
