import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'
import HomeSreen from './HomeSreen';
import SecondSreen from './SecondScreen';

import SplashView from '../splash/SplashView';

var index = StackNavigator(
    {
        SplashView: { screen: SplashView },
        // home:{screen:MainView},
    },
    { headerMode: 'none' },
);

const MainView = TabNavigator(
    {
        Home: { screen: HomeSreen },
        Second: { screen: SecondSreen },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Second') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} ></Ionicons>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }

);

export default MainView;