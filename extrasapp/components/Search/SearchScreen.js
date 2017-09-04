import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import _ from 'lodash'

import { getSearchResults } from './../../data/promises'
import {Grid, Row} from 'react-native-elements'
import Search from './Search'
import { AttributesForm } from './../Common'

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
  }

  onSubmit(data) {
  	this.setState({ isLoading: true })
  	/*getSearchResults().then((data) => {
  	  this.setState({isLoading: false, searching: true, data})
  	})*/
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
       	</View>}
     </View>
   );
 }
}
