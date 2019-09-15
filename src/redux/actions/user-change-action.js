import {USERCHANGE} from '../actions-types/UserChange';

export const userstate = ({prop,value})=>{
  return{
    type:USERCHANGE,
    payload:{prop,value}
  };
}
