import {
  USERSAVE,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCES,
  USERLOGIN,
} from '../actions-types';
import {GOOGLEUSERLOGIN} from '../actions-types/login-user-google';
import {FACEBOOKUSERLOGIN} from '../actions-types/login-user-facebook';
const initialState = {
  userid: null,
  error: '',
  loading: false,
};
const userStateReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case (USERSAVE,USERLOGIN,GOOGLEUSERLOGIN,FACEBOOKUSERLOGIN): {
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
        userid: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default userStateReducer;
