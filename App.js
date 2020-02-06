import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Loading from './src/screens/Loading';
import Login from './src/screens/Login';
import Main from './src/screens/Main';
import SignUp from './src/screens/SignUp';

const LoginStack = createStackNavigator(
  {
    Login,
  },
  {headerMode: 'none'},
);
const SignupStack = createStackNavigator(
  {
    SignUp,
  },
  {headerMode: 'none'},
);
const HomeStack = createStackNavigator(
  {
    Main,
  },
  {headerMode: 'none'},
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Load: Loading,
      SignUp: SignupStack,
      Login: LoginStack,
      Home: HomeStack,
    },
    {initialRouteName: 'Load'},
  ),
);
