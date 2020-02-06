import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import firebase from 'react-native-firebase';

export default class Loading extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this._isMounted = true;
    this._checkUserAuth();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  /***** || ----==---- || EDIT BY PINKKY FUNCTION || ----==---- ||
  |------------------------------------------------------------------------------------------------------------------------------------
  | |==|  |==|
  |------------------------------------------------------------------------------------------------------------------------------------
  *****/
  _checkUserAuth() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Home' : 'SignUp');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
