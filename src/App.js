import React from 'react';
import {StatusBar} from 'react-native';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {
  SplashScreen,
  SignUpScreen,
  SignInFbAndGoogle,
  SignWithEmail,
  AddStudentForm,
  SignInUser,
  AddStudent,
  ChooseAvatar,
} from './screens';
import {store, persistor} from './redux/store';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import firebase from 'firebase';

const AppNavigator = createStackNavigator(
  {
    chooseavatar:ChooseAvatar,
    addstudentform: AddStudentForm,
    addStudent: AddStudent,
    signemail: SignWithEmail,
    Signfbgle: SignInFbAndGoogle,
    signinuser: SignInUser,
    Home: SignUpScreen,
    SplashScreen: SplashScreen,
  },

  {
    initialRouteName: 'SplashScreen',
    headerMode:'none'
  },

  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDS6BxEiSPcNkDRAmDoEZqNzFIFPgC5dc0',
      authDomain: 'zaytouna-6e487.firebaseapp.com',
      databaseURL: 'https://zaytouna-6e487.firebaseio.com',
      projectId: 'zaytouna-6e487',
      storageBucket: 'zaytouna-6e487.appspot.com',
      messagingSenderId: '893199681484',
      appId: '1:893199681484:web:12040548dd20e75cfabf69',
    });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
