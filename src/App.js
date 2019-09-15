import React from 'react';
import {StatusBar} from 'react-native';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {SplashScreen,SignUpScreen,SignInFbAndGoogle,SignWithEmail,AddStudent,AddStudentForm,ChooseLevel} from './screens';
import {store, persistor} from './redux/store';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import{GoBackButton} from './components';

const AppNavigator = createStackNavigator(
  {
    Home: SignUpScreen ,
    Signfbgle: SignInFbAndGoogle,
    signemail:SignWithEmail,
    addstudentform:AddStudentForm,
  },
  {
  defaultNavigationOptions: {
      header: null
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <StatusBar translucent backgroundColor="transparent"  barStyle="dark-content"/>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}
