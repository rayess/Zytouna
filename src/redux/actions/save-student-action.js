import firebase from 'firebase';
import 'firebase/firestore';
import {SAVESTUDENT} from '../actions-types/save-student';
import {ADDSTUDENTSUCCESS} from '../actions-types/add-student-success';
import {ADDSTUDENTFAIL} from '../actions-types/add-student-fail';

export const saveStudent = (name, age, gender, filepath, iduser, isAssets) => {
  console.log(name);
  console.log(iduser);
  return dispatch => {
    dispatch({type: SAVESTUDENT});
    if (isAssets) {
      addstudent(iduser, name, age, gender, filepath);
    } else {
      uriToBlob(filepath, iduser, name, age, gender);
    }
  };
};

addstudent = (iduser, name, age, gender, downloadURL) => {
  var db = firebase.firestore();
  db.collection('users')
    .doc(iduser)
    .collection('students')
    .doc(name)
    .set({name: name, age: age, gender: gender, downloadURL: downloadURL})
    .then(() => {
      console.log('done');
      return {type: ADDSTUDENTSUCCESS, payload: name};
    });
};
uploadToFirebase = (blob, iduser, name, age, gender) => {
  return new Promise((resolve, reject) => {
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var metadata = {
      contentType: 'image/jpeg',
    };
    var uploadTask = storageRef
      .child('studentsavatars/' + blob.name)
      .put(blob, metadata);
    uploadTask
      .on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        function(snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        },
        function(error) {
          return {type: ADDSTUDENTFAIL, payload: error};
        },
        function() {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log('File available at', downloadURL);
            console.log(iduser);
            addstudent(iduser, name, age, gender, downloadURL);
          });
        },
      )
      .catch(error => {
        reject(error);
      });
  });
};
uriToBlob = (uri, iduser, name, age, gender) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
      // return the blob
      resolve(xhr.response);
      console.log(xhr.response);
      uploadToFirebase(xhr.response, iduser, name, age, gender);
    };
    xhr.onerror = function() {
      // something went wrong
      reject(new Error('uriToBlob failed'));
    };

    // this helps us get a blob
    xhr.responseType = 'blob';

    xhr.open('GET', uri, true);
    xhr.send(null);
  });
};
