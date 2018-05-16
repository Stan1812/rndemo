import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import DetailPage from './src/views/detail'
import FrontPage from './src/views/frontPage'
import {hidden} from 'ansi-colors';

const APP = StackNavigator({
  Home: {
    screen: FrontPage
  },
  Chat: {
    screen: DetailPage
  }
});
export default APP;
