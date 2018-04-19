/*
 * @Author: jianxin.luo 
 * @Date: 2018-04-19 09:51:56 
 * @Last Modified by: jianxin.luo
 * @Last Modified time: 2018-04-19 11:28:28
 */

import React, { Component } from 'react';
import { Alert, Animated, Dimensions,InteractionManager } from 'react-native';
import StorageUtils from '../global/StorageUtils';

const splashImg = require('../assets/img/timg.jpeg');
const { width, height } = Dimensions.get('window');

import TabNavigator from '../screens/TabNavigator';

export default class SplashView extends Component {
    constructor(props) {
        super(props);
        console.info("props",props);
        this.state = {
            bounceValue: new Animated.Value(1)
        };
    };
    componentDidMount() {
        Animated.timing(this.state.bounceValue, { toValue: 1.2, duration: 1000 }).start();
        const {navigation} = this.props;
        this.timer = setTimeout(() => {
            StorageUtils.getAsync('firstLogin').then((data) => {
                if (data == null || data == '') {
                    Alert.alert('用户是第一次登陆');
                    InteractionManager.runAfterInteractions(()=>{
                        console.info(navigation);
                        // navigation.resetTo({
                        //     component:TabNavigator,
                        //     name:'TabNavigator'
                        // });
                    });
                } else {
                    Alert.alert('用户非首次登录，直接进入下一级页面');
                }
            }, (error) => {
                console.log(error);

            })
        });
    };

    componentWillUpdate() {
        clearTimeout(this.timer);
    };

    render() {
        return (
            <Animated.Image
                style={{
                    width: width,
                    height: height,
                    transform: [{ scale: this.state.bounceValue }]
                }}
                source={splashImg}></Animated.Image>
        );
    };
}