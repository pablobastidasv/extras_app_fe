import React, { Component } from 'react';
import {View, Image} from 'react-native';
import {Button} from 'react-native-elements';

export default class HomeScreen extends Component {
 static navigationOptions = {
   title: 'ExtrasApp',
 };
 render() {
   const { navigate } = this.props.navigation;
   return (
    <View>
    <Image style={{width: 400, height: 300}} source={require('../../assets/images/extrasHome.jpg')}/>
      <Button
      large
      backgroundColor={'#2c3e50'}
      icon={{name: 'user', type: 'font-awesome'}}
      buttonStyle={{marginTop: '5%'}}
      borderRadius={5}
      containerViewStyle={{borderRadius: 5}} //rule added due to borderRadius Documentation notice
      title="Profile" onPress={() => navigate('Profile')}/>
      <Button
      large
      backgroundColor={'#2c3e50'}
      icon={{name: 'cubes', type: 'font-awesome'}}
      buttonStyle={{marginTop: '5%'}}
      borderRadius={5}
      containerViewStyle={{borderRadius: 5}}
      title="Oportunities" onPress={() => navigate('Oportunities')}/>
      <Button
      large
      backgroundColor={'#2c3e50'}
      icon={{name: 'search', type: 'font-awesome'}}
      buttonStyle={{marginTop: '5%'}}
      borderRadius={5}
      containerViewStyle={{borderRadius: 5}}
      title="Search" onPress={() => navigate('Search')}/>
    </View>
   );
 }
}