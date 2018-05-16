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
import Item from '../components/item'
import {hidden} from 'ansi-colors';
import {StackNavigator} from 'react-navigation';
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
  }, {
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
export default class FrontPage extends Component {
  static navigationOptions = {
    title: '首页'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {users.map((user, i) => <TouchableHighlight  key={i}  onPress={() => navigate('Chat',{ userInfo: user })}>
          <Item user={user}/>
        </TouchableHighlight>)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF'
  }
});
