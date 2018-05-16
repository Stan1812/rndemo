import React, {Component} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native'
export default class Article extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {Info} = this.props
        return (
            <View style={styles.artItem}>
                <Image style={styles.articleImg} source={require('../../static/imgs/3.jpg')}></Image>
                <View style={styles.articleInfo}>
                    <Text style={styles.artTitle}>{Info.title}</Text>
                    <Text style={styles.artSum}>{Info.sum}</Text>
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    artItem: {
        height: 200,
        paddingBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    articleImg: {
        width: 160,
        height: 100
    },
    articleInfo: {
        marginLeft:20
    },
    artTitle: {
        marginTop:10,
        fontSize: 18,
        fontWeight: '600'
    },
    artSum: {
        marginTop:20,
        fontSize: 16,
        fontWeight: '400'
    }
})