/*
 * @Author: jianxin.luo 
 * @Date: 2018-04-19 09:51:56 
 * @Last Modified by: jianxin.luo
 * @Last Modified time: 2018-04-19 11:28:28
 */

import React, { Component } from 'react';
import { Alert, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import StorageUtils from '../global/StorageUtils';

import styles from '../style/StyleSheets';

/**
 * 轮播图片
 */
const imageList = [
    
    'https://img.xiu8.com/img/avatar/m/1_1/7a/566/508fa67aa34fd3e3c33504f91785667a.jpg',
    'https://img.xiu8.com/img/avatar/m/1_1/eb/3db/de8420600b89e4b0a3e1c82d6bf3dbeb.jpg',
    'https://img.xiu8.com/img/avatar/m/1_1/99/465/158d732142689616f364cb4355e46599.jpg'
];

export default class SplashView extends Component {
    constructor(props) {
        super(props);
        console.log('------constructor,props:${props}');
    };
    componentDidMount() {
        console.log('------ccomponentDidMount');
        // StorageUtils.getAsync('firstLogin').then((data) => {
        //     if (data == null || data == '') {
        //         Alert.alert('用户是第一次登陆');
        //     } else {
        //         Alert.alert('用户非首次登录，直接进入下一级页面');
        //     }
        // }, (error) => {
        //     console.log(error);
        // });
    };

    componentWillUpdate() {
        console.log('------componentWillUpdate');
    };

    render() {
        console.log('------render');
        return (
            <View style={styles.container}>
                <Swiper
                    style={{ flex: 1 }}
                    autoplay={true}>
                    {this._renderImage()}
                </Swiper>
            </View>
        );
    };

    /**
     * 组装图片列表
     * 
     * @returns 
     * @memberof HomeScreen
     */
    _renderImage() {
        let imgView = [];
        for (let i = 0; i < imageList.length; i++) {
            imgView.push(
                <Image
                    key={i}
                    style={{ flex: 1 }}
                    source={{ uri: imageList[i] }}>
                </Image>
            );
        }
        return imgView;
    }
}