import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Image
} from 'react-native';
import Article from '../components/article'
const Info = {title:'苦妓回忆录',sum:'加西亚马尔克斯'}

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
      <View style={styles.wrapper}>
            <Article Info={Info}/>
        <View style={styles.header}>
          <Image style={styles.avatarImg} source={require('../../static/imgs/1.jpg')}/>
          <View style={styles.baseInfo}>
            <Text style={styles.InfoLabel}>姓名: {user.username}</Text>
            <Text style={styles.InfoLabel}>年龄: {user.age}</Text>
            <Text style={styles.InfoLabel}>性别: {user.gender}</Text>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor:'#f4f4f4'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    marginTop: 10,
    marginLeft:20,
    // justifyContent: ''
  },
  InfoLabel: {
    color: '#585858',
    fontSize: 16,
    fontWeight: '600'
  },
  avatarImg: {
    width: 75,
    height: 75,
    borderRadius: 75,
    marginRight:50
  },
  baseInfo: {
    
  }
})