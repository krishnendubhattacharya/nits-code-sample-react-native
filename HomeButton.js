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
    TouchableHighlight
} from 'react-native'

export default HomeButton = (props) => {
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
          style={styles.textinputstyle}
            keyboardType = 'numeric'          
          placeholder="PHONE NUMBER"         
          
        />

        
        <TouchableHighlight style={styles.fullWidthButton} onPress={onButtonPress}>
            <Text style={styles.fullWidthButtonText}>LOG IN</Text>
        </TouchableHighlight>
      </View>
   )
}
const onButtonPress = () => {
  Alert.alert('Successfully Login');
};
const styles = StyleSheet.create ({
   container: {
    flex: 1,
      
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'      
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
    fontFamily: 'Quicksand_Light'
  },
    stretch: {
        justifyContent: 'center',
        height:80,
        width:100,
        marginTop:-50
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