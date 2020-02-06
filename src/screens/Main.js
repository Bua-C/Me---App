import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import firebase from 'react-native-firebase';

export default class Main extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      errorMessage: null,
      message: [],
    };
    this.ref = firebase
      .firestore()
      .collection('ChatRoom')
      .doc('');
  }

  componentDidMount() {
    this._isMounted = true;
    const {currentUser} = firebase.auth();
    console.log(currentUser);
    this.setState({currentUser});
    this._fetchStore();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  /***** || ----==---- || EDIT BY PINKKY FUNCTION || ----==---- ||
|------------------------------------------------------------------------------------------------------------------------------------
| |==|  |==|
|------------------------------------------------------------------------------------------------------------------------------------
*****/

  /*** FETCH DATA IN FIRESTORE ***/
  _fetchStore() {
    try {
      this.ref.onSnapshot({
        error: e => console.error(e),
        next: querySnapshot => {
          // this._isMounted && this.setState({data: querySnapshot._data});
          console.log(
            '%c Snapshot:',
            'color: green; font-size: 13px',
            querySnapshot,
          );
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  /*** ADD MESSAGE ***/
  _OnAddMessage = () => {
    this.ref.set({
      users: [...prevState.message, this.state.message],
    });
  };

  /*** SIGN OUT ***/
  _signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.navigation.navigate('Login'))
      .catch(
        error =>
          this._isMounted && this.setState({errorMessage: error.message}),
      );
  };

  render() {
    return (
      <View style={styles.containertxt}>
        {/* <Button title="Out" onPress={this._signOut} /> */}
        <View></View>
        <View style={styles.inputContainertxt}>
          <TextInput
            placeholder="Type message here..."
            style={styles.inputtxt}
            onChangeText={message =>
              this._isMounted && this.setState({message})
            }
            value={this.state.message}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={this._OnAddMessage} style={styles.sendtxt}>
            <Text style={styles.texttxt}>Send ></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containertxt: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputContainertxt: {
    flexDirection: 'row',
  },
  inputtxt: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  sendtxt: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginLeft: 3,
    borderRadius: 5,
  },
  texttxt: {
    color: 'white',
  },
});
