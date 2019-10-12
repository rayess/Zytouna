import {USERLOGIN, LOGIN_USER_SUCCES, LOGIN_USER_FAIL} from '../actions-types';
import {loginUserSuccess, loginUserFail} from './save-user-action';
import firebase from 'firebase';
import Toast from 'react-native-root-toast';
import colors from '../../assets/color';
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
          .then(function(result) {
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
          .catch(function(error) {
            loginUserFail(dispatch, error);
            Toast.show(error.message, {
              duration: Toast.durations.LONG,
              position: Toast.positions.BOTTOM,
              shadow: true,
              animation: true,
              hideOnPress: true,
              delay: 0,
              backgroundColor: colors.blueSky,
              textColor: colors.white,
            });
          });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
};
