import React, { Component } from 'react';
import {AppRegistry,} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './components/HomeScreen'
import ProfileScreen from './components/Profile'
import SearchScreen from './components/HomeScreen'
import OportunitiesScreen from './components/Oportunities'

const extrasapp = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: {screen: ProfileScreen },
  Search: { screen: SearchScreen },
  Oportunities: { screen: OportunitiesScreen },
});

AppRegistry.registerComponent('extrasapp', () => extrasapp);
