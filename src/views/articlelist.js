import React, {Component} from 'react';
import {ScrollView, Image, Text, View, StyleSheet} from 'react-native';
import {Article} from "../components/article";
const articles = []
export default class ArticleList extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: '测试页'
    };
    render() {
        return (
            <ScrollView>
                {articles.map((article, i) => <Article key={i} articleInfo={article}/>)}
            </ScrollView>
        )
    }
}