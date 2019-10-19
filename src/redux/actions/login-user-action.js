import {USERLOGIN, LOGIN_USER_SUCCES, LOGIN_USER_FAIL} from '../actions-types';
import {loginUserSuccess, loginUserFail} from './save-user-action';
import firebase from 'firebase';
import {toastShow} from './show-error';
export const loginuser = (email, password, callBack) => {
  return dispatch => {
    dispatch({type: USERLOGIN});
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((result)=> {
            firebase.auth().onAuthStateChanged(user => {
              if (user) {
                userId = firebase.auth().currentUser.uid;
                loginUserSuccess(dispatch, userId);
                callBack();
              } else {
                // No user is signed in.
              }
            });
          })
          .catch((error)=> {
            loginUserFail(dispatch, error);
            toastShow(error.message);
          });
      })
      .catch((error) =>{
        // Handle Errors here.
        loginUserFail(dispatch, error);
        toastShow(error.message);
      });
  };
};
