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
    navigator,
    Dimensions

} from 'react-native'

export default class Passcode extends Component {
    constructor() {
      super()
      this.state = {
        passcod: ''      
      }
   }

   onButtonClk(event){
        let pass_cod=this.state.passcod;
        //Alert.alert(phn_no);

        if(this.state.passcod == '123456'){
          
        //Alert.alert('ok');
          this.props.navigator.replace({
            name: 'SwipeUpDown'
        });
            
        }else{
          Alert.alert('Wrong passcode');
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
                I just texted you a                
            </Text>
            <Text style = {styles.textstyle1}>                
                super secret passcode.                
            </Text>
            <Text style = {styles.textstyle2}>               
                Enter it below!
            </Text>
            <TextInput
            ref= {(el) => { this.passcod = el; }}
            onChangeText={(passcod) => this.setState({passcod})}
            value={this.state.passcod}
              style={styles.textinputstyle}
                keyboardType = 'numeric'          
              placeholder="PASSCODE"         

            />


            <TouchableHighlight style={styles.fullWidthButton} onPress={this.onButtonClk.bind(this)}>
                <Text style={styles.fullWidthButtonText}>START</Text>
            </TouchableHighlight>
          </View>
       )
    }
}

const styles = StyleSheet.create ({
   container: {
    flex: 1,
      
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#729299',
      height: Dimensions.get("window").height
   },
   fullWidthButton: {
    backgroundColor: '#444445',
    height:50,
    width:220,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#444445'
  },
  fullWidthButtonText: {
    fontSize:26,
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
       shopstretch: {
        justifyContent: 'center',
        height:20,
        width:25,
        marginTop:80
       },
    textstyle:{
        marginTop: 10,
        color: '#ffffff',
        fontSize:22,
        fontFamily: 'Quicksand_Light'
    },
textstyle1:{        
        color: '#ffffff',
        fontSize:22,
        fontFamily: 'Quicksand_Light'
    },
textstyle2:{        
        color: '#ffffff',
        fontSize:22,
        fontFamily: 'Quicksand_Light'
    },
    textinputstyle:{
        marginTop: 80,
        height: 50,
        width:200,
        fontSize:25,
        color:'#ffffff',
        fontFamily: 'Quicksand_Light',
        textAlign:'center'
        
    },
})