import React, { Component } from 'react';
import {Button, Text} from 'react-native';
export default class OportunitiesScreen extends Component {
 static navigationOptions = {
   title: 'Oportunities',
 };
 render() {
   const { navigate } = this.props.navigation;
   return (
     <Text>Oportunities</Text>
   );
 }
}
