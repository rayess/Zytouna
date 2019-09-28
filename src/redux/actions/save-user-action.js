import {USERSAVE,LOGIN_USER_SUCCES,LOGIN_USER_FAIL} from '../actions-types';
import { NavigationActions } from 'react-navigation';
import 'firebase/firestore';
import firebase from 'firebase';
export const saveuser = ({fullname,email,password})=>{
  console.log(fullname);
    return dispatch => {
      dispatch({type:USERSAVE});
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch(function(error) {
        loginUserFail(dispatch,error)
      }
    );
      firebase.auth().onAuthStateChanged(user => {
            if (user) {
          userId = firebase.auth().currentUser.uid;
         loginUserSuccess(dispatch,userId);
         var db = firebase.firestore();
         db.collection('users').doc(userId).set({name:fullname}).then(function(){
           console.log('done');
         });
            }
            else {
                // No user is signed in.
            }
        });

    }
    }

export const loginUserFail=(dispatch,error)=>{
  return dispatch({
    type:LOGIN_USER_FAIL,
    payload:error.message
  });
}
export const loginUserSuccess=(dispatch,user)=>{
  return dispatch({
    type:LOGIN_USER_SUCCES,
    payload:user
  });

}
