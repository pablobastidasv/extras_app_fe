import React, { Component } from 'react';
import {AppRegistry,} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { HomeScreen } from './components/Home';
import { ProfileScreen } from './components/Profile';
import { SearchScreen } from './components/Search';
import OportunitiesScreen from './components/Oportunities/OportunitiesScreen';

const extrasapp = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: {screen: ProfileScreen },
  Search: { screen: SearchScreen },
  Oportunities: { screen: OportunitiesScreen },
});

AppRegistry.registerComponent('extrasapp', () => extrasapp);
