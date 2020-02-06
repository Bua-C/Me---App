import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import firebase from 'react-native-firebase';

export default class SignUp extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
    };
  }
  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  _handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({errorMessage: error.message}));
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          placeholder="Type email here..."
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this._isMounted && this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Type password here..."
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password =>
            this._isMounted && this.setState({password})
          }
          value={this.state.password}
        />
        <TouchableOpacity style={styles.button} onPress={this._handleSignUp}>
          <Text>Sign Up ></Text>
        </TouchableOpacity>
        <Text onPress={() => this.props.navigation.navigate('Login')}>
          Already have an account? Login
        </Text>
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
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'pink',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginTop: 8,
    width: '90%',
    padding: 9,
    borderRadius: 5,
  },
});
