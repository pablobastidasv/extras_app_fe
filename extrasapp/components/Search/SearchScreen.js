import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import _ from 'lodash'

import { getSearch } from './../../data/searches'
import {Grid, Row} from 'react-native-elements'
import Search from './Search'
import { AttributesForm } from './../Common'


export default class SearchScreen extends Component {
 static navigationOptions = {
   title: 'Search',
 };

  render() {
   const { navigate } = this.props.navigation;
   const data = getSearch();

   return (
   	 <View>
   	   <View><Text>Search</Text></View>
   	   <View><AttributesForm /></View>
     </View>
   );
 }
}
