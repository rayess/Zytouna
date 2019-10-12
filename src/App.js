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
  ChooseLevel,
  ChooseChapter,
  ChooseLevelAndChapterSwiper,
} from './screens';
import {store, persistor} from './redux/store';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import firebase from 'firebase';

const authNavigator = createStackNavigator(
  {
    signinuser: SignInUser,
    signemail: SignWithEmail,
    signfbgle: SignInFbAndGoogle,
    signupscreen: SignUpScreen,
  },
  {
    initialRouteName: 'signupscreen',
    headerMode: 'none',
  },

  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const appNavigator = createStackNavigator(
  {
    swiperscreen: ChooseLevelAndChapterSwiper,
    choosechapter: ChooseChapter,
    chooselevel: ChooseLevel,
    chooseavatar: ChooseAvatar,
    addstudentform: AddStudentForm,
    addStudent: AddStudent,
  },

  {
    initialRouteName: 'swiperscreen',
    headerMode: 'none',
  },

  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const Navigator = createSwitchNavigator(
  {
    App: {
      screen: appNavigator,
    },
    SplashScreen: {
      screen: SplashScreen,
    },
    Login: {
      screen: authNavigator,
    },
  },
  {
    initialRouteName: 'App',
  },
);

const AppContainer = createAppContainer(Navigator);
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
