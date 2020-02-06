import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../../User';
class AuthScreen extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {};
    this._bootstrapAsync();
  }

  /***** || ----==---- || EDIT BY PINKKY FUNCTION || ----==---- ||
  |------------------------------------------------------------------------------------------------------------------------------------
  | |==| ALL FUNCTION IN THIS PAGES |==|
  |------------------------------------------------------------------------------------------------------------------------------------
  *****/

  /*** Fetch token ***/
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');
    console.log(User.phone);
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
