import {USERSAVE} from '../actions-types/userSave';
export const saveuser = ({name,email,password})=>{
  return{
    type:USERSAVE,
    payload:{name,email,password}
  };
}
