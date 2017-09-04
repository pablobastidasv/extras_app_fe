import React, { Component } from 'react'
import { AppRegistry, FormLabel, ScrollView, TextInput, View } from 'react-native';
import { Button, Grid, Row, Col, CheckBox, Text, Divider } from 'react-native-elements'
import _ from 'lodash'
//import autoBind from 'react-autobind';


const cbstyles = {
	padding: 2,
	backgroundColor: 'transparent',
	margin: 0,
	padding: 0,
}

const cbTextStyles = {
  fontSize: 10,
	fontWeight: 'normal',
	marginRight: 0,
	marginLeft: 0,
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
  	  ethnicity: '',
  	  skin: '',
  	}
  	this.submit = this.submit.bind(this);
  }

  componentWillMount(){

  }

  renderHairLength(){
  	const { props } = this
  	return (<View>
	  <Text style={{color: '#c0392b'}}>Hair Length</Text>
	  <View style={{flex: 1, flexDirection: 'column'}}>
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
	  <Text style={{color: '#c0392b'}}>Hair Color</Text>
	  <View style={{flex: 1, flexDirection: 'column'}}>
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
	  <Text style={{color: '#c0392b'}}>Nose</Text>
	  <View style={{flex: 1, flexDirection: 'column'}}>
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
	  <Text style={{color: '#c0392b'}}>Body Type</Text>
	  <View style={{flex: 1, flexDirection: 'column'}}>
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
	  <Text style={{color: '#c0392b'}}>Eyes</Text>
	  <View style={{flex: 1, flexDirection: 'column'}}>
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
	  <Text style={{color: '#c0392b'}}>Ethnicity</Text>
	  <View style={{flex: 1, flexDirection: 'column'}}>
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
	  <Text style={{color: '#c0392b'}}>Skin</Text>
	  <View style={{flex: 1, flexDirection: 'column'}}>
	    {_.map(props.skinTypes, (d,i) => <CheckBox
	      containerStyle={cbstyles}
	      textStyle={cbTextStyles}
		  checked={d===this.state.skin}
		  onPress={(a) => this.setState({ skin: d })}
		  title={d} key={i} />)}
	  </View>
	</View>)
  }

  renderGender() {
  	const { props } = this
  	return (<View>
	  <Text style={{color: '#c0392b'}}>Gender</Text>
	  <View style={{flex: 1, flexDirection: 'column'}}>
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
  	return (<View style={{flex: 1, flexDirection: 'column'}}>
	  <Text style={{color: '#c0392b'}}>City</Text>
	  <TextInput placeholder="Where are you?" 
		value={this.state.city}
		onChangeText={(city) => this.setState({city})} />
	</View>)
  }

  submit(){  	
  	this.props.onSubmit(this.state)
  }

  render() {
  	const { props } = this

  	const buttonProps = {
  	  color:'white'
  	}
	return (
	  <ScrollView 
	    pagingEnabled={true}
      style={{height: this.state.scrollHeight}}
	    horizontal={false}>
			<Text h4 style={{textAlign: 'center', color: '#34495e' }}>What type of extra are you looking for?</Text>
			<Button
  		 	 title={props.buttonSend}
			 onPress={this.submit}
			 backgroundColor={'#34495e'}
  		 	containerStyle={{backgroundColor: '#34495e', marginBottom:  '5%', marginTop: '5%'}}>
  			</Button>
			<Divider style={{ backgroundColor: '#34495e', marginBottom: '5%', marginTop: '5%' }} />			
			<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
				{this.renderHairLength()}
				{this.renderHairColor()}
				{this.renderNoseTypes()}  
			</View>
			<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
				{this.renderBodyTypeOptions()}
				{this.renderEyeColors()}
				{this.renderEthnicityTypeOptions()}
			</View>
			<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>			
				{this.renderSkinTypesOptions()}
				{this.renderGender()}
				{this.renderCity()}
			</View>
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
  buttonSend: React.PropTypes.string,
  //onSubmit: React.PropTypes.func.required,
  //gender:React.PropTypes.array,
}

AttributesForm.defaultProps = {
  hairLengthOptions: ['Long','Short','Bald'],
  hairColorOptions: ['Blond','Red','Grey','White'],
  noseTypeOptions: ['Greek','Roman','Nubian','Hawk','Snub','Turnup'],
  bodyTypeOptions: ['Plump', 'Stocky', 'Overweight', 'Fat', 'Slim', 'Trim', 'Skinny', 'Buff', 'Well built'],
  eyeColors:  ['Green', 'Blue', 'Brown', 'Black'],
  ethnicityOptions: [ 'American Indian', 'Asian', 'Black','White',' Hispanic' ],
  skinTypes: ['Sensitive','Fair', 'Normal', 'Olive', 'Brown', 'Black'],
  buttonSend:'Search',
}
