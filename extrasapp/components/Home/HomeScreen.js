import React, { Component } from 'react';
import {Button, View} from 'react-native';

export default class HomeScreen extends Component {
 static navigationOptions = {
   title: 'ExtrasApp',
 };
 render() {
   const { navigate } = this.props.navigation;
   return (
    <View>
      <Button title="Profile" onPress={() => navigate('Profile')}/>
      <Button title="Oportunities" onPress={() => navigate('Oportunities')}/>
      <Button title="Search" onPress={() => navigate('Search')}/>
    </View>
   );
 }
}