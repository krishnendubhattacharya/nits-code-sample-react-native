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

export default class Dashboard extends Component {
    constructor() {
      super()
   }
    render() {
       return (
          <View style = {styles.container}>
             <Image
              style={styles.stretch}
              source={require('./Images/logo.png')}
            />
            <Text style = {styles.textstyle}>
                Hello, my name is Kowallo.                
            </Text>
            <Text style = {styles.textstyle1}>                
                Swipe in any direction              
            </Text>
            <Text style = {styles.textstyle2}>               
                to get started.
            </Text>

            <Text style = {styles.uparrow}>               
                &#xf3d2;  &#xf3d0;  &#xf3d8;  &#xf3d3;
            </Text>
            
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
    textstyle:{
        marginTop: 50,
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
    uparrow:   {
        fontFamily: 'ionicons',
        fontSize:60,
        marginTop:15,
        color:'#454445'
    }
})