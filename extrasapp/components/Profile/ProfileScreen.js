import React, { Component } from 'react';
import {Image, View, FlatList} from 'react-native';
import _ from 'lodash';
import {Button, Text, Tile, Form, FormInput, Card, List, ListItem} from 'react-native-elements';

export default class ProfileScreen extends Component {

  constructor() {
    super()
    this.state = {
      data: {
        profileId: '34599',
        name: 'Marcus Sanchez',
        attributes: [
          { 
            name: 'hairLenght',
            value: 'Short',
          },
          { 
            name: 'nose',
            value: 'Straight',
          },
          { 
            name: 'bodyType',
            value: 'Skinny',
          },
          { 
            name: 'eyes',
            value: 'Dark',
          },
          { 
            name: 'HaiStyle',
            value: 'Curly',
          },
          { 
            name: 'Tatoo',
            value: 'None',
          },
        ],
        message: 'El mejor gato del multiuniverso',
        imgUrl: 'https://placekitten.com/g/300/200',
      },
    }
  };

 static navigationOptions = {
   title: 'User Profile',
 };
 
 render() {
   const { navigate } = this.props.navigation;
   return (
    <View>
      <Tile
      featured
      imageSrc={{uri: this.state.data.imgUrl }}
      title={this.state.data.name}
      caption={this.state.data.message}/>
      <List>
      <FlatList
        data={this.state.data.attributes}
        keyExtractor={item => item.name}        
        renderItem={({ item }) => (
          <ListItem
            title={_.startCase(item.name)}
            subtitle={item.value}
            rightIcon={{name: 'face'}}
          />
        )}
      />
    </List>
    </View>);
 }
}
