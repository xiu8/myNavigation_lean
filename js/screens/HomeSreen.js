/*
 * 首页
 * @Author: jianxin.luo 
 * @Date: 2018-04-14 18:54:01 
 * @Last Modified by: jianxin.luo
 * @Last Modified time: 2018-04-14 20:04:26
 */


import React, { Component } from 'react';
import { Text, Image, TouchableHighlight, View } from 'react-native';
import styles from '../style/StyleSheets';
import Swiper from 'react-native-swiper';
// 热门游戏列表
import HotGameList from './index/HotGameList';

/**
 * 轮播图片
 */
const imageList = [
    'https://img.xiu8.com/img/avatar/m/1_1/4b/435/f36bd76fccb67113fad059b50974354b.jpg',
    'https://img.xiu8.com/img/avatar/m/1_1/7a/566/508fa67aa34fd3e3c33504f91785667a.jpg',
    'https://img.xiu8.com/img/avatar/m/1_1/eb/3db/de8420600b89e4b0a3e1c82d6bf3dbeb.jpg',
    'https://img.xiu8.com/img/avatar/m/1_1/99/465/158d732142689616f364cb4355e46599.jpg'
];

/**
 * 默认首页
 * 
 * @export
 * @class HomeScreen
 * @extends {Component}
 */
export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.index_swiper}>
                    <Swiper
                        height={200}
                        autoplay={true}
                        // 设置距离底部的距离
                        paginationStyle={{ bottom: 5 }}
                    >
                        {this.renderImage()}
                    </Swiper>
                </View>
                <HotGameList></HotGameList>
                {/* <TouchableHighlight style={{ borderRadius: 5, marginBottom: 5 }}>
                    <View style={{ backgroundColor: '#eeeeee', padding: 10 }}>
                        <Text>Alert with message and default button</Text>
                    </View>
                </TouchableHighlight> */}
            </View>
        )
    };

    /**
     * 组装图片列表
     * 
     * @returns 
     * @memberof HomeScreen
     */
    renderImage() {
        let imgView = [];
        for (let i = 0; i < imageList.length; i++) {
            imgView.push(
                <Image
                    key={i}
                    style={styles.index_swiper_img}
                    source={{ uri: imageList[i] }}>
                </Image>
            );
        }
        return imgView;
    }
}