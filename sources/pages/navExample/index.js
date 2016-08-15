/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Button from 'react-native-button'

import NavigationBar from '../../components/NavigationBar'
import CameraDOM from '../../components/camera'

// default
export default class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'landingPage', name: 'Index'}}
        renderScene={ this.renderScene.bind(this) }
      />
    )
  }
  renderScene(route, navigator) {
    var routeId = route.id;

    switch (routeId) {
      case 'landingPage':
        return <MyScene navigator={navigator} />
        break;
      case 'camera':
        return <CameraDOM navigator={navigator} />
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

class MyScene extends Component {
  static propTypes = {

  }
  constructor(props, context) {
    super(props, context);
  }
  _pressButton() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        id: 'camera',
        name: 'Index'
      })
    }
  }
  render() {

    return (
      <View style={ styles.warp }>
        <View style={ styles.contentWarp }>
        <NavigationBar />
        <Text>測試</Text>
        </View>
        <View style={ styles.btnWarp }>
        <Button
          containerStyle={ styles.linkCameraWarp }
          style={ styles.linkCamera }
          styleDisabled={{color: 'red'}}
          onPress={() => this._pressButton()}>
          按我!
        </Button>
        </View>
        <View style={ styles.btnWarp }>
          <View style={ styles.item }>
            <Text style={ styles.itemText }>item 1</Text>
          </View>
          <View style={ styles.item }>
            <Text style={ styles.itemText }>item 2</Text>
          </View>
          <View style={ styles.item }>
            <Text style={ styles.itemText }>item 3</Text>
          </View>
          <View style={ styles.item }>
            <Text style={ styles.itemText }>item 4</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  warp: {
    flex: 1
  },
  contentWarp: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ccc'
  },
  btnWarp: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  linkCameraWarp: {
    flex: 1,
    padding:10,
    overflow:'hidden',
    borderRadius:50,
    backgroundColor: '#2ecc71',
    margin: 10
  },
  item: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    padding: 10,
    margin: 2
  },
  itemText : {
    color: 'white'
  },
  linkCamera: {
    fontSize: 20,
    color: 'white'
  }
});
