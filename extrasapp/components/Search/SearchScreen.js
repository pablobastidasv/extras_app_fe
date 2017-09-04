import React, { Component } from 'react';
import {Button, Text} from 'react-native';
import _ from 'lodash'

import { getSearch } from './../../data/searches'
import {Grid, Row} from 'react-native-elements'
import Search from './Search'
import { AttributesForm } from './../Common'


export default class SearchScreen extends Component {
 static navigationOptions = {
   title: 'Search',
 };

  render() {
   const { navigate } = this.props.navigation;
   const data = getSearch();

   return (
   	 <Grid>
   	 	<Row><Text>Search</Text></Row>
   	 	<Row><AttributesForm /></Row>
     	<Row>
     		<Grid>
     			{_.map(data, (d) => <Row><Text>{d.name}</Text></Row>)}
     		</Grid>
     	</Row>
     </Grid>
   );
 }
}
