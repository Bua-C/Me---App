import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../../User';

class Login extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      name: '',
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  /***** || ----==---- || EDIT BY PINKKY FUNCTION || ----==---- ||
  |------------------------------------------------------------------------------------------------------------------------------------
  | |==| ALL FUNCTION IN THIS PAGES |==|
  |------------------------------------------------------------------------------------------------------------------------------------
  *****/

  /*** CHECK INPUT ***/
  _handleChange = key => val => {
    this._isMounted && this.setState({[key]: val});
  };

  _OnSubmit = () => {
    const {phone, name} = this.state;
    if (phone.length < 8) {
      Alert.alert('Error', 'Wrong phone number');
    } else if (name.length < 3) {
      Alert.alert('Error', 'Wrong name');
    } else {
      AsyncStorage.setItem('userPhone', phone);
      User.phone = this.state.phone;
      this.props.navigation.navigate('App');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="phone number"
          keyboardType="number-pad"
          value={this.state.phone}
          onChangeText={this._handleChange('phone')}
          style={styles.input}
        />
        <TextInput
          placeholder="name"
          value={this.state.name}
          onChangeText={this._handleChange('name')}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={this._OnSubmit}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    marginBottom: 5,
    borderRadius: 5,
  },
  button: {
    width: '90%',
    backgroundColor: '#ccc',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
