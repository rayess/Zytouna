import {combineReducers} from 'redux';
import toggle from './toggle';
import userStateReducer from './userStateReducer';

const reducer = combineReducers({
  toggle: toggle,
  user:userStateReducer,

});
export default reducer;
