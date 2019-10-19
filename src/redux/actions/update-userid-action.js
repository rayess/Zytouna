import {UPDATEUSERID} from '../actions-types';
export const updateUserId=(userid)=>{
  return({type:UPDATEUSERID,payload:userid})
};
