/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Settings from "./Apps/Settings.js";
import Calculator from "./Apps/Calculator.js";
import PowerRanger from "./Apps/Powerranger.js";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Navigator,
  TouchableOpacity,
} from 'react-native';


export default class MainScreen extends Component {
  render() {
    return (
        <PowerRanger/>
    )
  }
}
AppRegistry.registerComponent('TipCalculator', () => MainScreen);
