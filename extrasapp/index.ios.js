import React, { Component } from 'react';
import {AppRegistry,} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './components/Home/HomeScreen'
import ProfileScreen from './components/Profile/ProfileScreen'
import SearchScreen from './components/Search/SearchScreen'
import OportunitiesScreen from './components/Oportunities/OportunitiesScreen'

const extrasapp = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: {screen: ProfileScreen },
  Search: { screen: SearchScreen },
  Oportunities: { screen: OportunitiesScreen },
});

AppRegistry.registerComponent('extrasapp', () => extrasapp);
