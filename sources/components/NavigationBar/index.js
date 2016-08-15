import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavigationBar from 'react-native-navbar';

class Nav extends Component {
  render() {
    const rightButtonConfig = {
      title: 'Next',
      handler: () => alert('hello!'),
    };

    const titleConfig = {
      title: 'Hello, world',
    };

    return (
        <NavigationBar
          style={ styles.nav }
          title={titleConfig}
          rightButton={rightButtonConfig} />
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});

export default Nav
