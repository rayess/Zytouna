import {USERSAVE, LOGIN_USER_SUCCES, LOGIN_USER_FAIL} from '../actions-types';
import 'firebase/firestore';
import firebase from 'firebase';
import {toastShow} from './show-error';
export const saveuser = (fullname, email, password, callBack) => {
  return dispatch => {
    console.log(fullname);
    dispatch({type: USERSAVE});
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result)=> {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            userId = firebase.auth().currentUser.uid;
            loginUserSuccess(dispatch, userId);
            var db = firebase.firestore();
            db.collection('users')
              .doc(userId)
              .set({name: fullname})
              .then(function() {
                console.log('done');
                callBack();
              });
          } else {
            // No user is signed in.
          }
        });
        console.log('success');
      })
      .catch((error)=> {
        loginUserFail(dispatch, error);
        toastShow(error.message);
      });
  };
};

export const loginUserFail = (dispatch, error) => {
  return dispatch({
    type: LOGIN_USER_FAIL,
    payload: error.message,
  });
};
export const loginUserSuccess = (dispatch, user) => {
  return dispatch({
    type: LOGIN_USER_SUCCES,
    payload: user,
  });
};
