import React, { Component } from 'react';
import { Button, Text, View ,FlatList} from 'react-native';
import _ from 'lodash'

import { getSearch } from './../../data/promises'
import {Grid, Row} from 'react-native-elements'
import Search from './Search'
import { AttributesForm } from './../Common'


import { List, ListItem} from 'react-native-elements';

export default class SearchScreen extends Component {
 
  constructor(props){
  	super(props)
  	this.state = {
  	  searchParams: {},
  	  searching: false,
  	  isLoading: false,
  	  data: [],
  	}
  	//autoBind(this, onSubmit)
  	this.onSubmit = this.onSubmit.bind(this);
  	this.loadUser = this.loadUser.bind(this);
  }

  onSubmit(data) {
    const cleanData = _.omitBy(data, (o) =>  o === '' );
    const cleanObject = {
      data : cleanData,
      pagination: {
        "page": 2,
        "size": 20
      }
    }
  	this.setState({ isLoading: true })
  	getSearch(cleanObject).then((data) => {
      const response = JSON.parse(data._bodyInit);
  	  this.setState({isLoading: false, searching: true, data: response})
  	})
  }

  loadUser(user){
  	this.props.navigation.navigate('Profile',{ user })
  }

  render() {
   const { navigate } = this.props.navigation;

   if(this.state.isLoading){
   	return <View><Text>Loading...</Text></View>
   }

   return (
   	 <View>
   	   {!this.state.searching && <View>
   	     <View>
   	       <AttributesForm onSubmit={this.onSubmit} />
   	     </View>
       </View>}
       {this.state.searching && <View>
       	  <Text>Search Results</Text>
			<List>
      		  <FlatList
        	   data={this.state.data}
               keyExtractor={item => item.type}        
               renderItem={({ item }) => (
          		<ListItem
                 title={_.startCase(item.name)}
                 subtitle={item.dni}
                 rightIcon={{name: 'face'}}
                 onPress={this.loadUser}
          		/>
        	  )}
      		/>
    	  </List>
       	</View>}
     </View>
   );
 }
}
