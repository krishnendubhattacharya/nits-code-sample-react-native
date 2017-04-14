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

export default class SwipeFourth extends Component {
    constructor() {
      super()
   }
   onButtonClk(){
        this.props.navigator.replace({
        name: 'SwipeFifth'
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

                <Text style = {styles.textstyle}>
                    As you swipe, you will earn             
                </Text>
                <Text style = {styles.textstyle1}>                
                    Kowallo Coins!             
                </Text>
                <Text style = {styles.textstyle}>               
                    Swipe Item = 1 Coin
                </Text>
                <Text style = {styles.textstyle2}>               
                    Share Item = 25 Coin
                </Text>
                <Text style = {styles.textstyle2}>               
                    Add a Friend = 50 Coin
                </Text>
                <Text style = {styles.textstyle2}>               
                    Swipe for Continues Days
                </Text>
                <Text style = {styles.textstyle2}>               
                    One Day = 4 Coins
                </Text>
                <Text style = {styles.textstyle2}>               
                    Two Days = 8 Coins
                </Text>
                <Text style = {styles.textstyle2}>               
                    Three Days = 16 Coins
                </Text>
                <Text style = {styles.textstyle2}>               
                    Four Days = 32 Coins
                </Text>
                <Text style = {styles.textstyle2}>               
                    Five Days = 64 Coins
                </Text>
                <Text style = {styles.textstyle2}>               
                    Six Days = 128 Coins
                </Text>
                <Text style = {styles.textstyle2}>               
                    Seven Days = 256 Coins
                </Text>

                <TouchableHighlight style={styles.fullWidthButton} onPress={this.onButtonClk.bind(this)}>
                <Text style={styles.fullWidthButtonText}>NEXT</Text>
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
      
      
      backgroundColor: '#987373',
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
    marginTop:10
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
        marginTop:30
       },
    textstyle:{
        marginTop: 10,
        
        color: '#ffffff',
        fontSize:18,
        textAlign:'center',
        fontFamily: 'Quicksand_Light'
    },
textstyle1:{        
        color: '#ffffff',
        
        fontSize:18,
textAlign:'center',
        fontFamily: 'Quicksand_Light',
        
    },
textstyle2:{        
        color: '#ffffff',        
        fontSize:18,
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