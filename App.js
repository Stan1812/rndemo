/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Item from './src/components/item'
const users = [
  {
    username: 'Jerry',
    age: 21,
    gender: 'male'
  }, {
    username: 'Tomy',
    age: 22,
    gender: 'male'
  }, {
    username: 'Lily',
    age: 19,
    gender: 'female'
  }, {
    username: 'Lucy',
    age: 20,
    gender: 'female'
  }
]
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {users.map((user,i) => <Item key={i} user={user} />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    backgroundColor: '#F5FCFF'
  },
});
