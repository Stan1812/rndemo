import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert, TouchableHighlight} from 'react-native';
export default class Item extends Component {
  render() {
    const {user} = this.props
    return (
      <View style={styles.item}>
        <View style={styles.header}>
          <Text style={styles.name}>姓名：{user.username}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.age}>年龄：{user.age}</Text>
          <Text style={styles.gender}>性别：{user.gender}</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  item: {
    marginBottom: 30,
    borderColor: '#4fb2ff',
    borderWidth: 2,
    // padding:0 5,
    paddingBottom: 5,
    borderRadius: 10
  },
  header: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#4fb2ff'
  },
  info: {
    padding: 10
  },
  name: {
    paddingLeft: 10,
    justifyContent: 'center',
    fontSize: 18,
    color: '#ffffff'
  }
})