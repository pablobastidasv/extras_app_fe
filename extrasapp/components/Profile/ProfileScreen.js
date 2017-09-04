import React, { Component } from 'react';
import {Image, View, ScrollView, FlatList} from 'react-native';
import _ from 'lodash';
import {Button, Text, Tile, Form, FormInput, Card, List, ListItem} from 'react-native-elements';

export default class ProfileScreen extends Component {

  constructor() {
    super()
    this.state = {
      data: null,
    }
  };

 static navigationOptions = {
   title: 'User Profile',
 };

 componentWillMount(){
  if(this.props.navigation){
    this.loadUser(this.props.navigation.state.params.user)
  }
 }

 loadUser(data){
  let user = data
  
  user.message= ''
  user.imgUrl= 'https://placekitten.com/g/300/200'
  this.setState({ data: user })

 }

 componentWillUpdate(props){
  if(props.user){
    this.loadUser(props.user)
    this.setState({ data: props.user})
  }
 }
 
 render() {
   const { navigate } = this.props.navigation;
   return (<View>
    {this.state.data && <ScrollView>

      <Tile
      featured
      imageSrc={{uri: this.state.data.imgUrl }}
      title={this.state.data.name}
      caption={this.state.data.message}/>
      <List>
      <FlatList
        data={this.state.data.attributes}
        keyExtractor={item => item.type}        
        renderItem={({ item }) => (
          <ListItem
            title={_.startCase(item.type)}
            subtitle={item.value}
            rightIcon={{name: 'face'}}
          />
        )}
      />
      </List>
    </ScrollView>}
   </View>)
 }
}

ProfileScreen.propTypes = {
  user: React.PropTypes.object,
}