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

export default class SwipeUp extends Component {
    constructor() {
      super()
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
                <View style = {styles.swipecontentleft}>

                    <Text style = {styles.uparrow}>               
                        &#xf3d8;
                    </Text>
                    <Text style = {styles.uparrow1}>               
                        &#xf3d8;
                    </Text>
                    <Text style = {styles.uparrow2}>               
                        &#xf3d8;
                    </Text>
                    <Text style = {styles.textstyle}>
                        To save               
                    </Text>
                    <Text style = {styles.textstyle1}>                
                        what I find             
                    </Text>
                    <Text style = {styles.textstyle2}>               
                        swipe up
                    </Text>

                    
                </View>
                <View style = {styles.swipecontentright}>
                    <Text style = {styles.uparrow}>               
                        &#xf3d0;
                    </Text>
                    <Text style = {styles.uparrow1}>               
                        &#xf3d0;
                    </Text>
                    <Text style = {styles.uparrow2}>               
                        &#xf3d0;
                    </Text>
                    <Text style = {styles.textstyle}>
                        To skip                
                    </Text>
                    <Text style = {styles.textstyle1}>                
                        what I find             
                    </Text>
                    <Text style = {styles.textstyle2}>               
                        swipe down
                    </Text>
                </View>
            </View>
            <View style = {styles.swipebottom}>
                
                    <Text style = {styles.bootomarrow}>               
                        &#xf3d8;
                    </Text>               
                
                    <Text style = {styles.bottomtext}>               
                        EXPLORE FOR YOURSELF
                    </Text>               
                
                    <Text style = {styles.bootomarrow}>               
                        &#xf3d0;
                    </Text>
                
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
      
      
      backgroundColor: '#729299',
      height: Dimensions.get("window").height
   },
    swipebottom: {
    
      
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
      
   },
swipeimage: {   
      
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
        marginTop:50
      
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
        marginTop: 10,
        
        color: '#ffffff',
        fontSize:20,
        textAlign:'center',
        fontFamily: 'Quicksand_Light'
    },
textstyle1:{        
        color: '#ffffff',
        
        fontSize:20,
textAlign:'center',
        fontFamily: 'Quicksand_Light'
    },
textstyle2:{        
        color: '#ffffff',
        
        fontSize:20,
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
    uparrow1:   {
        fontFamily: 'ionicons',
        fontSize:30,
        marginTop:-20,
        
        textAlign:'center'
    },
    uparrow2:   {
        fontFamily: 'ionicons',
        fontSize:30,
        marginTop:-20,
        
        
        textAlign:'center'
    },
bootomarrow:   {
        fontFamily: 'ionicons',
        fontSize:70,
        marginTop:0,
        color: '#ffffff',
        textAlign:'center'
    },
    swipecontent:{
         
        flexDirection: 'row',
        
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginTop:50
    },
    swipecontentleft:{
        width: (Dimensions.get("window").width/2.1), 
        
        marginRight: 5,
        
    },
    swipecontentright:{
        width: (Dimensions.get("window").width/2.1), 
        
        marginLeft: 5,
        
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
        marginTop:0,
        textAlign:'center',
        fontSize:25,
        
        
    }
    
})