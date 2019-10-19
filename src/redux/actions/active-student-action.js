import {ACTIVESTUDENT} from '../actions-types';
export const activeStudent=(name)=>{
  return({type:ACTIVESTUDENT,payload:name});
}
