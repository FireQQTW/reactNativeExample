/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux'

import ListViewBasics from './sources/components/listView'
import NavigationBar from './sources/components/NavigationBar'
import CameraDOM from './sources/components/camera'
import App from './sources/containers/App'
import configureStore from './sources/store/configureStore'

const store = configureStore();

class ReduxUniversal extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('reactNativeExample', () => ReduxUniversal);
