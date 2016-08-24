import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from 'react-native-button'

import * as SeedActions from '../../actions/seed'
import NavigationBar from '../../components/NavigationBar'

class Home extends Component {
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
    const { seed, callSetID, callGetPosts } = this.props


    return (
      <View style={ styles.warp }>
        <View style={ styles.contentWarp }>
        <NavigationBar />
        <Text>{seed.name}</Text>
        </View>
        <View style={ styles.btnWarp }>
        <Button
          containerStyle={ styles.linkCameraWarp }
          style={ styles.linkCamera }
          styleDisabled={{color: 'red'}}
          onPress={() => this._pressButton()}>
          按我!
        </Button>
        <Button
          containerStyle={ styles.linkCameraWarp }
          style={ styles.linkCamera }
          styleDisabled={{color: 'red'}}
          onPress={() => callGetPosts()}>
          設定id
        </Button>
        </View>
      </View>
    )
  }
}

Home.propTypes = {
  callSetID: PropTypes.func.isRequired
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
  linkCameraWarp: {
    flex: 1,
    padding:10,
    overflow:'hidden',
    borderRadius:50,
    backgroundColor: '#2ecc71',
    margin: 10
  },
  linkCamera: {
    fontSize: 20,
    color: 'white'
  }
});

function mapStateToProps(state) {
  return {
    seed: state.seed
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SeedActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
