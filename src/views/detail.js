import React, {Component} from 'react';
import {Text, View, StyleSheet, Modal, TouchableHighlight} from 'react-native';
export default class DetailPage extends Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = {
    title: '测试页'
  };
  render() {
    const user = this.props.navigation.state.params.userInfo;
    return (
      <View >
         <Text>Hello {user.username}</Text>
      </View>
    )
  }
}