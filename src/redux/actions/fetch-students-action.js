import {FETCHSTUDENTDATA,FETCHSTUDENTDATASUCCESS,FETCHSTUDENTDATAFAIL} from '../actions-types';
import 'firebase/firestore';
import firebase from 'firebase';
import {toastShow} from './show-error';
export const fetchStudentsData=(userid)=>{
   return  dispatch => {
    dispatch({type: FETCHSTUDENTDATA});
    getStudents (userid,dispatch);
  }
}

getStudents = (userid,dispatch) => {
  const students = [];
  firebase
    .firestore()
    .collection('users')
    .doc(userid)
    .collection('students')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach((doc)=>{
        students.push(doc.data());
      });
       dispatch({type: FETCHSTUDENTDATASUCCESS,payload:students})
    })
    .catch((error) =>{
      dispatch({type: FETCHSTUDENTDATAFAIL});
      toastShow(error.message);
    });
};
