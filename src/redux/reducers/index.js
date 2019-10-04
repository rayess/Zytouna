import {combineReducers} from 'redux';
import toggle from './toggle';
import userStateReducer from './userStateReducer';
import studentStateReducer from './studentStateReducer';
const reducer = combineReducers({
  toggle: toggle,
  user:userStateReducer,
  student:studentStateReducer,
});
export default reducer;
