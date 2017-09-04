import React, { Component } from 'react';
import { Button, Text, View ,FlatList} from 'react-native';
import _ from 'lodash'

import { getSearchResults } from './../../data/promises'
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
  	this.setState({ isLoading: true })
  	getSearchResults().then((data) => {
  	  this.setState({isLoading: false, searching: true, data})
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
               keyExtractor={item => item.name}        
               renderItem={({ item }) => (
          		<ListItem
                 title={_.startCase(item.name)}
                 subtitle={item.value}
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
