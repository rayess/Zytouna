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
  ChooseLevelAndChapterSwiper,ChooseLevel,ChooseChapter1Screen,ChooseChapterScreen2,ChooseChapterScreen3,
} from './screens/sign-screens';
import {Lesson1Screen,SchoolThingsActivity,} from './screens/chapters-screens/chapter1-screen';
import {FeelingsLessonScreen,FeelingActivity} from './screens/chapters-screens/chapter2-screen';
import {CanActivityScreen,ActivitiesLessonScreen} from './screens/chapters-screens/chapter3-screen';
import {HaveGotActivityScreen,FoodLessonScreen} from './screens/chapters-screens/chapter4-screen';
import {OurTheirActivityScreen,SchoolThingScreen} from './screens/chapters-screens/chapter5-screen';
import {PartyLessonScreen} from './screens/chapters-screens/chapter7-screen';
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
    partylessonscreen:PartyLessonScreen,
    ourtheiractivityscreen:OurTheirActivityScreen,
    schoolthingscreen:SchoolThingScreen,
    havegotactivityscreen:HaveGotActivityScreen,
    foodlessonscreen:FoodLessonScreen,
    ourtheirscreenactivity:OurTheirActivityScreen,
    canactivityscreen:CanActivityScreen,
    activitieslessonscreen:ActivitiesLessonScreen,
    feelingactivity:FeelingActivity,
    feelinglessonscreen:FeelingsLessonScreen,
    schoolthingsactivity:SchoolThingsActivity,
    lesson1screen:Lesson1Screen,
    choosechapterscreen3:ChooseChapterScreen3,
    choosechapterscreen2:ChooseChapterScreen2,
    choosechapter1screen:ChooseChapter1Screen,
    chooselevel:ChooseLevel,
    swiperscreen: ChooseLevelAndChapterSwiper,
    chooseavatar: ChooseAvatar,
    addstudentform: AddStudentForm,
    addStudent: AddStudent,
  },
  {
    initialRouteName: 'addStudent',
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
    initialRouteName: 'SplashScreen',
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
