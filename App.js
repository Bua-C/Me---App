// import React from 'react';

// import {createSwitchNavigator, createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// import LoginScreen from './src/screens/LoginScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import AuthScreen from './src/screens/AuthScreen';

// const LoginStack = createStackNavigator({
//   LoginScreen,
// });
// const HomeStack = createStackNavigator({
//   HomeScreen,
// });

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       Auth: AuthScreen,
//       Login: LoginStack,
//       Home: HomeStack,
//     },
//     {initialRouteName: 'Auth'},
//   ),
// );

import React from 'react';

// *@ COMPONENTS
import Setup from './src';

const App = () => {
  return <Setup />;
};

export default App;
