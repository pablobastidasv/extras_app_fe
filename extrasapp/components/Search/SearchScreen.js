import React, { Component } from 'react';
import {Button, Text} from 'react-native';
export default class SearchScreen extends Component {
 static navigationOptions = {
   title: 'Search',
 };
 render() {
   const { navigate } = this.props.navigation;
   return (
     <Text>Search</Text>
   );
 }
}
