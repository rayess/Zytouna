import {USERLOGIN,LOGIN_USER_SUCCES,LOGIN_USER_FAIL} from '../actions-types';
import {loginUserSuccess,loginUserFail} from './save-user-action';
import firebase from 'firebase';
export const loginuser = ({email,password})=>{
    return dispatch => {
      dispatch({type:USERLOGIN});
    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch(function(error) {
        loginUserFail(dispatch,error)
      }
      )
      firebase.auth().onAuthStateChanged(user => {
            if (user) {
          userId = firebase.auth().currentUser.uid;
          loginUserSuccess(dispatch,userId);
            } else {
                // No user is signed in.
            }
        });
    }
    }
