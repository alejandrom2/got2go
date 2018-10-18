import React from 'react';
import { Image, StyleSheet, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BathroomScreen from '../screens/BathroomScreen';
import LoginTabNavigator from './LoginTabNavigator';
const iconCalendar = require('../assets/images/home.png');
const iconMap = require('../assets/images/map.png');

const LoginStack = createStackNavigator({
  Login: LoginTabNavigator,
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <Image resizeMode="contain" source={iconCalendar}
      style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]} />
  ),
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: "#000",
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },
  headerCaption: {
    fontFamily: "Times",
    color: "#000",
    fontSize: 18,
  },
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <Image resizeMode="contain" source={iconCalendar}
    style={[ styles.tabBarIcon, focused && styles.tabBarIconFocused ]} />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <Image resizeMode="contain" source={iconMap}
    style={[ styles.tabBarIcon, focused && styles.tabBarIconFocused ]} />
  ),
};

const  BathroomStack = createStackNavigator({
  Bathroom: BathroomScreen,
});

BathroomStack.navigationOptions = {
    tabBarLabel: 'Bathroom',
    tabBarIcon: ({ focused }) => (
      <Image resizeMode="contain" source={iconCalendar}
      style={[ styles.tabBarIcon, focused && styles.tabBarIconFocused ]} />
    ),
  };

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};



export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  BathroomStack,
  SettingsStack
});
