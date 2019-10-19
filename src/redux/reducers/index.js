import {combineReducers} from 'redux';
import toggle from './toggle';
import userStateReducer from './userStateReducer';
import studentStateReducer from './studentStateReducer';
import activeStudentReducer from './activeStudentReducer';
const reducer = combineReducers({
  toggle: toggle,
  user:userStateReducer,
  student:studentStateReducer,
  activestudent:activeStudentReducer,
});
export default reducer;
