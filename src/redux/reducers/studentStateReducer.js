import {SAVESTUDENT} from '../actions-types/save-student';
import {ADDSTUDENTSUCCESS} from '../actions-types/add-student-success';
import {ADDSTUDENTFAIL} from '../actions-types/add-student-fail';
import {FETCHSTUDENTDATA,FETCHSTUDENTDATASUCCESS,FETCHSTUDENTDATAFAIL} from '../actions-types';
const initialState = {
  loading: false,
  students:[],
};
const studentStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVESTUDENT: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCHSTUDENTDATA: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADDSTUDENTFAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case FETCHSTUDENTDATAFAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case ADDSTUDENTSUCCESS: {
      return {
        ...state,
        loading: false,
        students: [...state.students, action.payload]
      };
    }
    case FETCHSTUDENTDATASUCCESS:{
      return{
        ...state,
        loading: false,
        students: action.payload
      }
    }
    default: {
      return state;
    }
  }
};
export default studentStateReducer;
