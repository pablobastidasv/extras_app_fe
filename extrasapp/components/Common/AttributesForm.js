import React, { Component } from 'react'
import { AppRegistry, FormLabel, ScrollView, Text, TextInput, View } from 'react-native';
import { Button, Grid, Row, Col, CheckBox } from 'react-native-elements'
import _ from 'lodash'

const cbstyles = {
  padding: 2,
}

const cbTextStyles = {
  fontSize: 10,
  fontWeigh: 'normal',
}

const FEMALE = 'Female'
const MALE = 'Male'

export default class AttributesForm extends Component {

  constructor(props){
  	super(props)
  	this.state ={
  	  name:'',
  	  nose:'',
  	  hairLength: '',
  	  hairColor: '',
  	  bodyType: '',
  	  eyes: '',
  	  gender:'',
  	  city:'',
  	  eyes:'',
  	  ethnicity: '',
  	  skin: '',
  	  height: '',
  	}
  }

  renderHairLength(){
  	const { props } = this
  	return (<View>
	  <Text>Hair Length</Text>
	  <View>
	    {_.map(props.hairLengthOptions, (d,i) => <CheckBox
	      containerStyle={cbstyles}
	      textStyle={cbTextStyles}
		  checked={d===this.state.hairLength}
		  onPress={(a) => this.setState({ hairLength: d })}
		  title={d} key={i} />)}
	  </View>
	</View>)
  }

  renderHairColor(){
  	const { props } = this
  	return (<View>
	  <Text>Hair Color</Text>
	  <View>
	    {_.map(props.hairColorOptions, (d,i) => <CheckBox
	      containerStyle={cbstyles}
	      textStyle={cbTextStyles}
		  checked={d===this.state.nose}
		  checkedColor='#03a9f4'
		  onPress={(a) => this.setState({ nose: d })}
		  title={d} key={i} />)}
	  </View>
	</View>)
  }

  renderNoseTypes(){
  	const { props } = this
  	return (<View>
	  <Text>Hair Color</Text>
	  <View>
	    {_.map(props.noseTypeOptions, (d,i) => <CheckBox
	      containerStyle={cbstyles}
	      textStyle={cbTextStyles}
		  checked={d===this.state.hairColor}
		  onPress={(a) => this.setState({ hairColor: d })}
		  title={d} key={i} />)}
	  </View>
	</View>)
  }  
  
  renderBodyTypeOptions() {
  	const { props } = this
  	return (<View>
	  <Text>Body Type</Text>
	  <View>
	    {_.map(props.bodyTypeOptions, (d,i) => <CheckBox
	      containerStyle={cbstyles}
	      textStyle={cbTextStyles}
		  checked={d===this.state.bodyType}
		  onPress={(a) => this.setState({ bodyType: d })}
		  title={d} key={i} />)}
	  </View>
	</View>)
  }
  
  renderEyeColors(){
  	const { props } = this
  	return (<View>
	  <Text>Eyes</Text>
	  <View>
	    {_.map(props.eyeColors, (d,i) => <CheckBox
	      containerStyle={cbstyles}
	      textStyle={cbTextStyles}
		  checked={d===this.state.eyes}
		  onPress={(a) => this.setState({ eyes: d })}
		  title={d} key={i} />)}
	  </View>
	</View>)
  }
  
  renderEthnicityTypeOptions(){
  	const { props } = this
  	return (<View>
	  <Text>Ethnicity</Text>
	  <View>
	    {_.map(props.ethnicityOptions, (d,i) => <CheckBox
	      containerStyle={cbstyles}
	      textStyle={cbTextStyles}
		  checked={d===this.state.ethnicity}
		  onPress={(a) => this.setState({ ethnicity: d })}
		  title={d} key={i} />)}
	  </View>
	</View>)
  }

  renderSkinTypesOptions(){
  	const { props } = this
  	return (<View>
	  <Text>Skin</Text>
	  <View>
	    {_.map(props.skinTypes, (d,i) => <CheckBox
	      containerStyle={cbstyles}
	      textStyle={cbTextStyles}
		  checked={d===this.state.ethnicity}
		  onPress={(a) => this.setState({ skin: d })}
		  title={d} key={i} />)}
	  </View>
	</View>)
  }

  renderGender() {
  	const { props } = this
  	return (<View>
	  <Text>Gender</Text>
	  <View>
	    <CheckBox  containerStyle={cbstyles}
	      textStyle={cbTextStyles}
		  checked={MALE === this.state.gender}
		  onPress={(a) => this.setState({ gender: MALE })}
		  title={MALE} />
		 <CheckBox  containerStyle={cbstyles}
	      textStyle={cbTextStyles}
		  checked={FEMALE === this.state.gender}
		  onPress={(a) => this.setState({ gender: FEMALE })}
		  title={FEMALE} />
	  </View>
	</View>)
  }

  renderCity() {
  	return (<View>
	  <Text>Name</Text>
	  <TextInput placeholder="Type in your name" 
		value={this.state.name}
		onChangeText={(name) => this.setState({name})} />
	</View>)
  }


  render() {
  	const { props } = this

  	const buttonProps = {
  	  color:'white'
  	}
	return (
	  <ScrollView 
	  pagingEnabled={true}
	   onContentSizeChange={this.setScrollHeight}
    	style={{height: this.state.scrollHeight}}

	  horizontal={false}>
		<View><Text></Text></View>
		<View>
		  <Text>Name</Text>
		  <TextInput placeholder="Type in your name" 
		    value={this.state.name}
		  	onChangeText={(name) => this.setState({name})} />
		</View>

		{this.renderHairLength()}
  		{this.renderHairColor()}
  		{this.renderNoseTypes()}  
  		{this.renderBodyTypeOptions()}
  		{this.renderEyeColors()}
  		{this.renderEthnicityTypeOptions()}
  		{this.renderSkinTypesOptions()}

  		{this.renderGender()}
  		{this.renderCity()}
	  </ScrollView>
	);
  }
}


AttributesForm.propTypes = {
  hairLengthOptions: React.PropTypes.array,
  hairColorOptions: React.PropTypes.array,
  noseTypeOptions: React.PropTypes.array,
  bodyTypeOptions: React.PropTypes.array,
  eyeColors: React.PropTypes.array,
  ethnicityOptions: React.PropTypes.array,
  skinTypes: React.PropTypes.array,
  //gender:React.PropTypes.array,
}

AttributesForm.defaultProps = {
  hairLengthOptions: ['Long','Short','Bald'],
  hairColorOptions: ['Blond','Red','Grey','White','Bald'],
  noseTypeOptions: ['Greek','Roman','Nubian','Hawk','Snub','Turnup'],
  bodyTypeOptions:  ['Blond', 'Red', 'Grey', 'White','Bald','Blond'],
  eyeColors:  ['Green', 'Blue', 'Brown', 'Black'],
  ethnicityOptions: [ 'American Indian', 'Asian', 'Black','White',' Hispanic' ],
  skinTypes: ['Sensitive','Fair', 'Normal', 'Olive', 'Brown', 'Black'],
}
