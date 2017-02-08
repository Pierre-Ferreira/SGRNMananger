import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDTx0HmTQcbuf16fZNEXzYeqL-k0-xBZJw',
      authDomain: 'gsrnmanager.firebaseapp.com',
      databaseURL: 'https://gsrnmanager.firebaseio.com',
      storageBucket: 'gsrnmanager.appspot.com',
      messagingSenderId: '445822190336'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
