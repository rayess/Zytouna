import {
  USERSAVE,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCES,
  USERLOGIN,
} from '../actions-types';
const initialState = {
  userid: null,
  error: '',
  loading: false,
};
const userStateReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case USERSAVE: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_USER_FAIL: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case LOGIN_USER_SUCCES: {
      return {
        ...state,
        ...initialState,
        userid: action.payload,
        loading: false,
      };
    }
    case USERLOGIN: {
      return {
        ...state,
        ...initialState,
        userid: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default userStateReducer;
