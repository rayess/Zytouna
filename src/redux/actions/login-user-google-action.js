import {GoogleSignin} from 'react-native-google-signin';
import 'firebase/firestore';
import firebase from 'firebase';
import {LOGIN_USER_SUCCES, LOGIN_USER_FAIL} from '../actions-types';
import {GOOGLEUSERLOGIN} from '../actions-types/login-user-google';
import {toastShow} from './show-error';
export const loginUserGoogle = callBack => {
  return dispatch => {
    dispatch({type: GOOGLEUSERLOGIN});
    onLoginGoogle(callBack,dispatch);
  };
};
onLoginGoogle= (callBack,dispatch) => {
  GoogleSignin.signIn()
    .then(async data => {
      console.log('sign in google data ', data);
      // Create a new Firebase credential with the token
      const credential = await firebase.auth.GoogleAuthProvider.credential(
        data.idToken,
        data.accessToken,
      );
      console.log('credential  ', credential);
      // Login with the credential
      return firebase.auth().signInWithCredential(credential);
    })
    .then(user => {
      console.log('firebase user ', user);
      var db = firebase.firestore();
      db.collection('users')
        .doc(user.user.uid)
        .set({name: user.user.displayName})
        .then(()=> {
          dispatch({type: LOGIN_USER_SUCCES, payload: user.user.uid});
          callBack();
        });
    })
    .catch(err => {
      console.log('firebase error ', err);
      toastShow(err.message);

    });
};
