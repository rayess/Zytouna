import {FACEBOOKUSERLOGIN} from '../actions-types/login-user-facebook';
import {LOGIN_USER_SUCCES, LOGIN_USER_FAIL} from '../actions-types';
import { LoginManager,AccessToken,GraphRequest,
GraphRequestManager, } from "react-native-fbsdk";
import 'firebase/firestore';
import firebase from 'firebase';
import {toastShow} from './show-error';
export const loginUserFacebbok =(callback,dispatch)=>{
  return dispatch => {
    dispatch({type: FACEBOOKUSERLOGIN});
    onLoginOrRegister (callback,dispatch);
  }

};
onLoginOrRegister = (callback,dispatch) => {
  LoginManager.logInWithPermissions(["public_profile"])
    .then((result) => {
      if (result.isCancelled) {
        return Promise.reject(new Error('The user cancelled the request'));
      }
      // Retrieve the access token
      return AccessToken.getCurrentAccessToken();
    })
    .then((data) => {
      // Create a new Firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
      // Login with the credential
      return firebase.auth().signInWithCredential(credential);
    })
    .then((user) => {
      console.log('facebook user',user);
      var db = firebase.firestore();
      db.collection('users')
        .doc(user.user.uid)
        .set({name: user.user.displayName})
        .then(function() {
          console.log('done');
         dispatch({type: LOGIN_USER_SUCCES, payload: user.user.uid});
         callback();
        });
    })
    .catch((error) => {
      const { code, message } = error;
      toastShow(message);
      // For details of error codes, see the docs
      // The message contains the default Firebase string
      // representation of the error
    });
}
