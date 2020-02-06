import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <View style={styles.background} />
        <View style={styles.viewBox}>
          <TextInput placeholder="Type message here..." style={styles.input} />
        </View>
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
  background: {
    backgroundColor: 'pink',
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    position: 'absolute',
    top: -150,
    left: -25,
  },
  viewBox: {
    flexDirection: 'row',
  },
  input: {
    width: '98%',
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 5,
    marginBottom: 1,
  },
});
