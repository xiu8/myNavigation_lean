/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import TabNavigators from './js/screens/TabNavigator';
// export default TabNavigator({
//   Home: { screen: HomeSreen },
//   Second: { screen: SecondSreen },
// });

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  };
  render() {
    return (
      <TabNavigators></TabNavigators>
    );
  }
}