import React, { Component } from 'react'
import {Button, Text} from 'react-native'
import _ from 'lodash'
//import { getSearch } from './../../data/searches'

export default class SearchScreen extends Component {
 static navigationOptions = {
   title: 'Search',
 };

 render() {
   const { navigate } = this.props.navigation;
   return (
     <Text>Searching</Text>
   );
 }
}
