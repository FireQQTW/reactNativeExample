/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  ListView,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SeedActions from '../actions/seed';

import CameraDOM from './../components/camera'
import Home from './../pages/home'
import ListExample from './../pages/listView'

// default
export default class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'listview', name: 'Index'}}
        renderScene={ this.renderScene.bind(this) }
      />
    )
  }
  renderScene(route, navigator) {
    var routeId = route.id;

    switch (routeId) {
      case 'landingPage':
        return <Home navigator={navigator} />
        break;
      case 'camera':
        return <CameraDOM navigator={navigator} />
        break;
      case 'listview':
        return <ListExample navigator={navigator} />
        break;
      default:
      return this.noRoute(navigator)
    }
  }

  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>请在 index.js 的 renderScene 中配置这个页面的路由</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
