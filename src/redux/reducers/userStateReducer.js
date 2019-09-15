import {USERCHANGE} from '../actions-types/UserChange';
import {USERSAVE} from '../actions-types/userSave';
const initialState = {
  name:'',
  email:'',
  password:''
};
const userStateReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case USERCHANGE: {
      return {
        ...state,
        [action.payload.prop]: [action.payload.value]
      };
    }
    case USERSAVE:{
      return {
        ...state,
        [action.payload.prop]: [action.payload.value]
      };
    }
    default: {
      return state;
    }
  }
};
export default userStateReducer;
