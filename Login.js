import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image,
    Button,
    Alert,
    TouchableHighlight,
    Dimensions
} from 'react-native'

export default class Login extends Component {
    constructor() {
      super()
      this.state = {
        phnno: ''      
      }
   }

   onButtonClk(event){
        let phn_no=this.state.phnno;
        //Alert.alert(phn_no);

        if(this.state.phnno){
          this.props.navigator.replace({
            name: 'Passcode'
        });
        //Alert.alert('ok');
            
        }else{
          Alert.alert('Please enter mobile number');
        }
   }
    render() {
       return (
          <View style = {styles.container}>
         <Image
          style={styles.stretch}
          source={require('./Images/logo.png')}
        />
        <Text style = {styles.textstyle}>
            Hello, friend.
        </Text>
        <TextInput
          ref= {(el) => { this.phnno = el; }}
          onChangeText={(phnno) => this.setState({phnno})}
          value={this.state.phnno}          
          style={styles.textinputstyle}
            keyboardType = 'numeric'          
          placeholder="PHONE NUMBER"         
          
        />

        
        <TouchableHighlight style={styles.fullWidthButton} onPress={this.onButtonClk.bind(this)}>
            <Text style={styles.fullWidthButtonText}>LOG IN</Text>
        </TouchableHighlight>
      </View>
       )
    }
}
const onButtonPress = () => {
  Alert.alert('Successfully Login');
};
const styles = StyleSheet.create ({
   container: {
    flex: 1,
      
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#73939A',
      height: Dimensions.get("window").height     
   },
   fullWidthButton: {
    backgroundColor: '#444445',
    height:50,
    width:200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#444445'

  },
  fullWidthButtonText: {
    fontSize:24,
    color: 'white',
    fontFamily: 'Quicksand_Light',
    fontWeight:'bold'
  },
    stretch: {
        justifyContent: 'center',
        height:80,
        width:100,
        marginTop:10
       },
    textstyle:{
        marginTop: 100,
        color: '#ffffff',
        fontSize:20,
        fontFamily: 'Quicksand_Light'
    },
    textinputstyle:{
        marginTop: 100,
        height: 50,
        width:200,
        fontSize:25,
        color:'#ffffff',
        fontFamily: 'Quicksand_Light'
        
    },
})