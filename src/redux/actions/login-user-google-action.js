import {GoogleSignin, statusCodes} from 'react-native-google-signin';
import 'firebase/firestore';
import firebase from 'firebase';
import {LOGIN_USER_SUCCES, LOGIN_USER_FAIL} from '../actions-types';
import {loginUserSuccess, loginUserFail} from './save-user-action';
import {GOOGLEUSERLOGIN} from '../actions-types/login-user-google';
import {toastShow} from './show-error';
export const loginUserGoogle = callBack => {
  return dispatch => {
    dispatch({type: GOOGLEUSERLOGIN});
    _isSignedIn(callBack, dispatch);
  };
};
_isSignedIn = async (callBack, dispatch) => {
  const isSignedIn = await GoogleSignin.isSignedIn();
  if (isSignedIn) {
    //Get the User details as user is already signed in
    _getCurrentUserInfo(callBack, dispatch);
  } else {
    //alert("Please Login");
    _signIn(callBack, dispatch);
  }
};

_getCurrentUserInfo = async (callBack, dispatch) => {
  try {
    await GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '893199681484-dvjtgh62oacf5ce60mjst3212fteb7ha.apps.googleusercontent.com',
    });
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    const userInfo = await GoogleSignin.signInSilently();
    dispatch({type: LOGIN_USER_SUCCES, payload: userInfo.user.id});
    callBack();

    // console.warn('User Info --> ', userInfo);
    // var db = firebase.firestore();
    // db.collection('users')
    //   .doc(userInfo.user.id)
    //   .set({name: userInfo.user.name, email: userInfo.user.email})
    //   .then(res => {
    //     dispatch({type: LOGIN_USER_SUCCES, payload: userInfo.user.id});
    //     callBack();
    //   });
  } catch (error) {
    // toastShow(error.message);
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      // alert('User has not signed in yet');
      console.log('User has not signed in yet');
    } else {
      // alert("Something went wrong. Unable to get user's info");
      console.log("Something went wrong. Unable to get user's info");
    }
  }
};

_signIn = async (callBack, dispatch) => {
  //Prompts a modal to let the user sign in into your application.
  try {
    await GoogleSignin.hasPlayServices({
      //Check if device has Google Play Services installed.
      //Always resolves to true on iOS.
      showPlayServicesUpdateDialog: true,
    });
    const userInfo = await GoogleSignin.signIn();

    console.warn('User Info --> ', userInfo);
    var db = firebase.firestore();
    db.collection('users')
      .doc(userInfo.user.id)
      .set({name: userInfo.user.name, email: userInfo.user.email})
      .then(() => {
        console.log('done');
        dispatch({type: LOGIN_USER_SUCCES, payload: userInfo.user.id});
        callBack();
      });
  } catch (error) {
    console.warn('Message', error.message);
    toastShow(error.message);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.warn('User Cancelled the Login Flow');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.warn('Signing In');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.warn('Play Services Not Available or Outdated');
    } else {
      console.warn('Some Other Error Happened');
    }
  }
};

_signOut = async () => {
  //Remove user session from the device.
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    // this.setState({userInfo: null}); // Remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};
