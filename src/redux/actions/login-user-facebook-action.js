import {FACEBOOKUSERLOGIN} from '../actions-types/login-user-facebook';
import {LOGIN_USER_SUCCES, LOGIN_USER_FAIL} from '../actions-types';
import { LoginManager,AccessToken,GraphRequest,
GraphRequestManager, } from "react-native-fbsdk";
import 'firebase/firestore';
import firebase from 'firebase';
export const loginUserFacebbok =(callback)=>{
  return dispatch => {
    dispatch({type: FACEBOOKUSERLOGIN});
    loginFb ();
  }

};
loginFb =()=>{
LoginManager.logInWithPermissions(["public_profile"]).then(
function(result) {
if (result.isCancelled) {
  console.log("Login cancelled");
} else {
  console.log(
    "Login success with permissions: " +
      result.grantedPermissions.toString());
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          console.log(data);
          const processRequest = new GraphRequest(
          '/me?fields=name,picture,email.type(large)',
          null,
          this.get_Response_Info
        );
        // Start the graph request.
        new GraphRequestManager().addRequest(processRequest).start();
        }
      )
    }
},
function(error) {
console.log("Login fail with error: " + error);
}
);
}
get_Response_Info =(error, result)=>{
  if (error) {
    //Alert for the Error
    Alert.alert('Error fetching data: ' + error.toString());
  } else {
    //response alert
    var db = firebase.firestore();
    db.collection('users')
      .doc(result.id)
      .set({name: result.name})
      .then(function() {
        console.log('done');
        return dispatch({type: LOGIN_USER_SUCCES, payload: result.id});
      });
    console.log(result);
  }
};
