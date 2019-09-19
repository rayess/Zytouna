import React from 'react';
import {StatusBar} from 'react-native';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {SplashScreen,SignUpScreen,SignInFbAndGoogle,SignWithEmail,AddStudent,AddStudentForm,ChooseLevel,SignInUser} from './screens';
import {store, persistor} from './redux/store';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';

const AppNavigator = createStackNavigator(
  {
    Home: SignUpScreen ,
    Signfbgle: SignInFbAndGoogle,
    signemail:SignWithEmail,
    addstudentform:AddStudentForm,
    signinuser:SignInUser
  },
  {
  defaultNavigationOptions: {
      header: null
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp(
            {
              apiKey: 'AIzaSyDS6BxEiSPcNkDRAmDoEZqNzFIFPgC5dc0',
              authDomain: 'zaytouna-6e487.firebaseapp.com',
              databaseURL: 'https://zaytouna-6e487.firebaseio.com',
              projectId: 'zaytouna-6e487',
              storageBucket: 'zaytouna-6e487.appspot.com',
              messagingSenderId: '893199681484',
              appId: '1:893199681484:web:12040548dd20e75cfabf69'
        });
      }

render(){
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <StatusBar translucent backgroundColor="transparent"  barStyle="dark-content"/>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}
}
export default App;
