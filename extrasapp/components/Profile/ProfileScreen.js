import React, { Component } from 'react';
import {Button, Text} from 'react-native';
export default class ProfileScreen extends Component {
 static navigationOptions = {
   title: 'Profile',
 };
 render() {
   const { navigate } = this.props.navigation;
   return (
     <Text>Profile</Text>
   );
 }
}
