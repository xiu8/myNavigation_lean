/*
 * 热门游戏列表
 * @Author: jianxin.luo 
 * @Date: 2018-04-14 19:41:23 
 * @Last Modified by: jianxin.luo
 * @Last Modified time: 2018-04-14 21:10:16
 */

import React, { Component } from 'react';
import { Text, Image, Alert, TouchableHighlight, View, ScrollView } from 'react-native';
import styles from '../../style/StyleSheets';
import HttpUtils from '../../global/HttpUtils';

const _hotListData = [
    { id: 1, img: 'https://img.xiu8.com/img/avatar/m/1_1/56/e31/fbdb61f9228fba9c76f86dbefd1e3156.jpg', title: '我的世界我的世界我的世界我的世界我的世界我的世界我的世界' },
    { id: 2, img: 'http://img4.18183.com/h5/171220/30-1G220153454121.jpg', title: '三国演义' },
    { id: 3, img: 'http://img4.18183.com/h5/180224/27-1P22412243JK.jpg', title: '萌宠' },
    { id: 4, img: 'http://img4.18183.com/h5/180413/30-1P4131F95AG.png', title: '石器时代' },
    { id: 5, img: 'http://img4.18183.com/h5/allimg/171220/30-1G2201HA70-L.png', title: '传奇' },
];

export default class HotGameList extends Component {
    render() {
        return (
            <View style={styles.hot_game_list}>
                <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer}>
                    {this._getHotData()}
                </ScrollView>
            </View>
        );
    };

    /**
     * 获取模拟热门游戏列表数据
     * Tips: 事件传递参数的方法有两种
     * 
     *    1. <TouchableHighlight onPress={() => this._onPress(_hotListData[i])}>
     *    2. <TouchableHighlight onPress={this._onPress.bind(this,_hotListData[i])}>
     * 
     * TouchableHighlight 用于封装视图，使其可以正确的响应触摸操作
     * 
     * @returns 
     * @memberof HotGameList
     */
    _getHotData() {
        let map = [];
        /**
         * 测试http请求
         */
        // 1. GET 请求
        HttpUtils.get('/api/userInfo', { data: { userId: 999854 } }).then((data) => {
            Alert.alert("GET:   " + JSON.stringify(data));
        }, (e) => {
            Alert.alert("GET:   " + JSON.stringify(e));
        });

        // 2. form_data post请求
        // let formData = new FormData();
        // formData.append("user", "999854");
        // formData.append("this", "fromData");

        // HttpUtils.post('/api/modify', { data: formData, ContentType: HttpUtils.CONTENTTYPE.FROM_DATA })
        //     .then((data) => {
        //         Alert.alert("from_data:   " + JSON.stringify(data));
        //     }, (e) => {
        //         Alert.alert("form_data:   " + JSON.stringify(e))
        //     });

        // 3. 默认表单提交方式
        // HttpUtils.post('/api/modify', { data: { userId: 888754 }, ContentType: HttpUtils.CONTENTTYPE.X_WWW_FORM })
        //     .then((data) => {
        //         Alert.alert("默认表单:   " + JSON.stringify(data));
        //     }, (e) => {
        //         Alert.alert("默认表单:   " + JSON.stringify(e))
        //     });

        // 4. JSON提交方式
        // HttpUtils.post('/api/modify', { data: { userId: 888754 }, ContentType: HttpUtils.CONTENTTYPE.JSON })
        //     .then((data) => {
        //         Alert.alert("JSON:   " + JSON.stringify(data));
        //     }, (e) => {
        //         Alert.alert("JSON:   " + JSON.stringify(e))
        //     });

        for (let i = 0, l = _hotListData.length; i < l; i++) {
            map.push(
                <TouchableHighlight onPress={() => this._onPress(_hotListData[i])}>
                    <View style={{ flexDirection: 'column', width: 100, marginRight: 5, backgroundColor: '#999', alignItems: 'center' }}>
                        <Image
                            source={{ uri: _hotListData[i].img }}
                            style={{ height: 75, width: 100, overflow: 'hidden' }}
                            onPress={() => Alert.alert('Image', 'Test img onpress')}
                        >
                        </Image>
                        <Text style={{ height: 30, lineHeight: 25, color: '#FFF' }} onPress={() => Alert.alert('Text', 'Text text onPress')} numberOfLines={1}>{_hotListData[i].title}</Text>
                    </View>
                </TouchableHighlight>
            );
        }

        return map;

    };

    _onPress(obj) {
        Alert.alert('提示', '点击了图片组件:' + obj.title)
    }
}