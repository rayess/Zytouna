import firebase from 'firebase';
import 'firebase/firestore';
import {SAVESTUDENT} from '../actions-types/save-student';
import {ADDSTUDENTSUCCESS} from '../actions-types/add-student-success';
import {ADDSTUDENTFAIL} from '../actions-types/add-student-fail';

export const saveStudent=(name,age,gender,filepath,iduser)=>{
  console.log(name);
  console.log(iduser);
  return dispatch => {
    dispatch({type: SAVESTUDENT});
    uriToBlob(filepath,iduser,name,age,gender);
  }

}


uriToBlob = (uri,iduser,name,age,gender) => {
  uploadToFirebase = (blob,iduser,name,age,gender) => {
    addstudent=(downloadURL)=>{
      var db = firebase.firestore();
      db.collection('users')
        .doc(iduser)
        .collection('students')
        .set({name: name,age:age,gender:gender,downloadURL:downloadURL})
        .then(function() {
          console.log('done');
          return{type:ADDSTUDENTSUCCESS,payload:name};
        });
    }
 return new Promise((resolve, reject)=>{
   var storage = firebase.storage();
   var storageRef = storage.ref();
   var metadata = {
   contentType: 'image/jpeg'
  };
  var uploadTask = storageRef.child('studentsavatars/' + blob.name).put(blob, metadata);
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
    return{type:ADDSTUDENTFAIL, payload:error};
  }, function() {
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
    console.log(iduser);
    addstudent(downloadURL);

  });
}).catch((error)=>{

     reject(error);

   });

 });
  }
return new Promise((resolve, reject) => {

  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    // return the blob
    resolve(xhr.response);
    console.log(xhr.response);
    uploadToFirebase(xhr.response);
  }
  xhr.onerror = function() {
    // something went wrong
    reject(new Error('uriToBlob failed'));
  };

  // this helps us get a blob
  xhr.responseType = 'blob';

  xhr.open('GET', uri, true);
  xhr.send(null);

});

}
