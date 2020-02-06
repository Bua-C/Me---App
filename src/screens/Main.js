import React from 'react';
import {StyleSheet, Platform, Image, Text, View, Button} from 'react-native';
import firebase from 'react-native-firebase';

export default class Main extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      errorMessage: null,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    const {currentUser} = firebase.auth();
    this.setState({currentUser});
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  _signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.navigation.navigate('Login'))
      .catch(error => this.setState({errorMessage: error.message}));
  };

  render() {
    const {currentUser} = this.state;
    return (
      <View style={styles.container}>
        <Text>Hi {currentUser && currentUser.email}!</Text>
        <Button title="sign out" onPress={this._signOut} />
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
