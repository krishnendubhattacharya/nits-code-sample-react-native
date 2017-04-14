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

export default class Swipe extends Component {
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
                        &#xf3d2;&#xf3d2;&#xf3d2;
                    </Text>
                    <Text style = {styles.textstyle}>
                        If you don't like                
                    </Text>
                    <Text style = {styles.textstyle1}>                
                        what I mind             
                    </Text>
                    <Text style = {styles.textstyle2}>               
                        swipe left
                    </Text>

                    
                </View>
                <View style = {styles.swipecontentright}>
                    <Text style = {styles.uparrow}>               
                        &#xf3d3;&#xf3d3;&#xf3d3;
                    </Text>
                    <Text style = {styles.textstyle}>
                        If you like                
                    </Text>
                    <Text style = {styles.textstyle1}>                
                        what I mind             
                    </Text>
                    <Text style = {styles.textstyle2}>               
                        swipe right
                    </Text>
                </View>
            </View>
            <View style = {styles.swipebottom}>
                <View style = {styles.swipebottomleft}>
                    <Text style = {styles.bootomarrow}>               
                        &#xf3d2;
                    </Text>
                </View>
                <View style = {styles.swipebottommiddle}>
                    <Text style = {styles.bottomtext}>               
                        Explore for yourself
                    </Text>
                </View>
                <View style = {styles.swipebottomright}>
                    <Text style = {styles.bootomarrow}>               
                        &#xf3d3;
                    </Text>
                </View>
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
bootomarrow:   {
        fontFamily: 'ionicons',
        fontSize:70,
        marginTop:15,
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
        marginTop:20,
        textAlign:'center',
        fontSize:22,
        marginTop:35
        
    }
    
})