import React, { Component } from 'react';
import {Image, View, FlatList} from 'react-native';
import _ from 'lodash';
import {Button, Text, Tile, Form, FormInput, Card, List, ListItem} from 'react-native-elements';

export default class ProfileScreen extends Component {

  constructor() {
    super()
    this.state = {
      data: null,
    }
    /*this.state = {
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
    }*/
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
  const res = {}
  _.forEach(data.attributes, (d) => 
    _.set(res, _.get(d, 'name'), _.get(d,'value'))
  )
  let user = data
  user.attributes = res
  user.imgSrc = 
  user.message= 'El mejor gato del multiuniverso'
  user.imgUrl= 'https://placekitten.com/g/300/200'
  //console.error(user)
  this.setState({ data: user })
 }

 componentWillUpdate(props){
  console.error("Updating the data", props)
  if(props.user){
    this.loadUser(props.user)
    this.setState({ data: props.user})
  }
 }
 
 render() {
   const { navigate } = this.props.navigation;
   return (<View>
    {this.state.data && <View>

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
    </View>}
   </View>)
 }
}

ProfileScreen.propTypes = {
  user: React.PropTypes.object,
}

/*
ProfileScreen.defaultProps = {
  user: {
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



    */