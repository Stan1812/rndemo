import React, {Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
export default class Item extends Component {
    render() {
        const {user} = this.props
        return (
            <View style={styles.item}>
                <Text style={styles.name}>姓名：{user.username}</Text>
                <Text style={styles.age}>年龄：{user.age}</Text>
                <Text style={styles.gender}>性别：{user.gender}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    item:{
        marginBottom:20
    },
    name: {
        justifyContent: 'center',
        fontSize: 20,
        color: '#4fb2ff'
    },
    
})