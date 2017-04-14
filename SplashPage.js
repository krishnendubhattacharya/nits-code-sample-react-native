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
    Dimensions,
    navigator
} from 'react-native'

export default class SplashPage extends Component {
    constructor() {
      super()
   }
    componentWillMount () {
        var navigator = this.props.navigator;
        setTimeout (() => {
            navigator.replace({
                name: 'SwipeFirst', 
            });
        }, 2000); 
    }
    render() {
       return (
          
             <Image
              style={styles.stretch}
              source={require('./Images/splashscreen.jpg')}
            />           
            
          
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
        flex: 1,      
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width
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