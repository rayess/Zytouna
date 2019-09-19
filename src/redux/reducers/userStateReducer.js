import {USERCHANGE} from '../actions-types/UserChange';
import {USERSAVE,LOGIN_USER_FAIL,LOGIN_USER_SUCCES,USERLOGIN} from '../actions-types';
const initialState = {
  name:'',
  email:'',
  password:'',
  user:null,
  error:'',
  loading:false
};
const userStateReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case USERCHANGE: {
      if(action.payload.prop=='name'){
        return {
          ...state,name:action.payload.value
        }
      }
      if(action.payload.prop=='email'){
        return {
          ...state,email:action.payload.value
        }
      }
      if(action.payload.prop=='password'){
        return {
          ...state,password:action.payload.value
        }
      }

    }
    case USERSAVE:{
      return {
        ...state,
        loading:true
      }
    }
    case LOGIN_USER_FAIL:{
      return{
        ...state,error:action.payload,loading:false
      };
    }
    case LOGIN_USER_SUCCES:{
      return{
        ...state,...initialState,user:action.payload
      }
    }
    case USERLOGIN:{
      return{
        ...state,...initialState,user:action.payload
      }
    }
    default: {
      return state;
    }
  }
};
export default userStateReducer;
