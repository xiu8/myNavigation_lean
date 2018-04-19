import React, { Component } from 'react';
import { Text, View } from 'react-native';

/**
 * 
 * 
 * @export
 * @class SecondScreen
 * @extends {Component}
 */
export default class SecondScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>SecondScreen</Text>
            </View>
        );
    };
}