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
      message: null,
      data: null,
    };
    // this.ref = firebase
    //   .firestore()
    //   .collection('GroupZ')
    //   .doc('UserZ');
  }

  componentDidMount() {
    this._isMounted = true;
    const {currentUser} = firebase.auth();
    this.setState({currentUser});
    // this._fetchStore();
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
  // _fetchStore() {
  //   try {
  //     this.ref.onSnapshot({
  //       error: e => console.error(e),
  //       next: querySnapshot => {
  //         // this._isMounted &&
  //         //   this.setState({data: querySnapshot._data.or_status});
  //         console.log(
  //           '%c Snapshot:',
  //           'color: green; font-size: 13px',
  //           querySnapshot,
  //         );
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  /*** ADD MESSAGE ***/
  // _OnAddMessage = () => {
  //   this.ref.set({
  //     // message: this.state.message,
  //     message: 'message',
  //   });
  // };

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
    const {currentUser} = this.state;
    return (
      <View style={styles.container}>
        <Button
          title="Log Out"
          onPress={this._signOut}
          style={styles.buttonLogin}
        />
        <View style={styles.viewBox}>
          <TextInput
            placeholder="Type message here..."
            style={styles.input}
            onChangeText={message =>
              this._isMounted && this.setState({message})
            }
            value={this.state.message}
            autoCapitalize="none"
          />
          {/* <TouchableOpacity onPress={this._OnAddMessage} style={styles.send}>
            <Text style={styles.text}>Send ></Text>
          </TouchableOpacity> */}
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
  viewBox: {
    flexDirection: 'row',
    top: 345,
  },
  input: {
    width: '85%',
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 5,
    marginBottom: 1,
  },
  send: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 3,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
  buttonLogin: {
    marginTop: 1000,
  },
});
