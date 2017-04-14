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

export default class SwipeFifth extends Component {
    constructor() {
      super()
   }
   onButtonClk(){
        this.props.navigator.replace({
        name: 'Login'
    });
   }
    render() {
       return (
          <View style = {styles.container}>
            <View style = {styles.swipeimage}>
                <Image
                 style={styles.stretch}
                 source={require('./Images/logo.png')}
               />
            </View>
            <View style = {styles.swipecontent}>
                <Image
                  style={styles.shopstretch}
                  source={require('./Images/logo-1.png')}
                />
                <Text style = {styles.textstyle}>
                    You can then use the coins to earn            
                </Text>
                
                <Text style = {styles.textstyle1}>               
                    free items in the
                </Text>
                <Text style = {styles.textstyle1}>               
                    Kowallo Shop!
                </Text>
                

                <TouchableHighlight style={styles.fullWidthButton} onPress={this.onButtonClk.bind(this)}>
                <Text style={styles.fullWidthButtonText}>START</Text>
            </TouchableHighlight>
                
                
                
            </View>
            
            
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
      
      
      backgroundColor: '#A5A07F',
      height: Dimensions.get("window").height
   },
    swipebottom: {
    
      
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
      
   },
swipeimage: {   
      
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
        marginTop:50
      
   },
   fullWidthButton: {
    backgroundColor: '#434343',
    height:50,
    width:220,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#434343',
    marginTop:120
  },
  fullWidthButtonText: {
    fontSize:20,
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
        fontSize:14,
        textAlign:'center',
        fontFamily: 'Quicksand_Light'
    },
textstyle1:{        
        color: '#ffffff',
        
        fontSize:14,
textAlign:'center',
        fontFamily: 'Quicksand_Light',
        
    },
textstyle2:{        
        color: '#ffffff',        
        fontSize:14,
        textAlign:'center',
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
        fontSize:30,
        marginTop:15,
        
        textAlign:'center'
    },
    upimage:{
        justifyContent: 'center',
        height:60,
        width:40,
        marginTop:40,
        alignItems: 'center'
    },
    bootomarrowleftright:   {
        fontFamily: 'ionicons',
        fontSize:35,
        marginTop:5,
        color: '#ffffff',
        textAlign:'center'
    },
bootomarrow:   {
        fontFamily: 'ionicons',
        fontSize:70,
        marginTop:15,
        color: '#ffffff',
        textAlign:'center'
    },
    swipecontent:{
         
        flexDirection: 'column',
        
      justifyContent: 'center',
      alignItems: 'center'      
    },
    swipecontentleft:{
        width: (Dimensions.get("window").width/2.1), 
        
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    swipecontentright:{
        width: (Dimensions.get("window").width/2.1), 
        
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    swipebottomleft:{
        width:50
    },
    swipebottommiddle:{
        width:200,
        
        
    },
    swipebottomright:{
        width:50
    },
    bottomtext:{
        marginTop:20,
        textAlign:'center',
        fontSize:22,
        marginTop:35
        
    }
    
})