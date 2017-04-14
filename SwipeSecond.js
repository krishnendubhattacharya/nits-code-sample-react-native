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
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class SwipeSecond extends Component {
    constructor() {
      super()
   }

   onSwipeUp(gestureState) {
        
    //Alert.alert('swiped up');
    this.props.navigator.replace({
        name: 'SwipeThird'
    });
  }
 
  onSwipeDown(gestureState) {
    
    //Alert.alert('swiped down');
    this.props.navigator.replace({
        name: 'SwipeThird'
    });
  }
 
  onSwipeLeft(gestureState) {
    
    //Alert.alert('swiped left');
    

  }
 
  onSwipeRight(gestureState) {
    
    //Alert.alert('swiped right');
    
  }

onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {          
          case SWIPE_UP:
            this.setState({backgroundColor: 'red'});
            break;
          case SWIPE_DOWN:
            this.setState({backgroundColor: 'green'});
            break;
        }
  }
    render() {
        const config = {
          velocityThreshold: 0.3,
          directionalOffsetThreshold: 80
        };
       return (
        <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}        
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: '#ffffff'
        }}
        >
          <View style = {styles.container}>
            <View style = {styles.swipeimage}>
                <Image
                 style={styles.stretch}
                 source={require('./Images/logo.png')}
               />
            </View>
            <View style = {styles.swipecontent}>
                <View style = {styles.swipecontentleft}>

                    
                    <Image
                     style={styles.upimage}
                     source={require('./Images/h-d.png')}
                   />
                    <Text style = {styles.textstyle}>
                        If you hate                
                    </Text>
                    <Text style = {styles.textstyle1}>                
                        what you see             
                    </Text>
                    <Text style = {styles.textstyle2}>               
                        swipe down
                    </Text>
                    <Text style = {styles.bootomarrowleftright}>               
                        &#xf3d0;
                    </Text>

                    
                </View>
                <View style = {styles.swipecontentright}>
                    <Image
                     style={styles.upimage}
                     source={require('./Images/h-u.png')}
                   />
                    <Text style = {styles.textstyle}>
                        If you love                
                    </Text>
                    <Text style = {styles.textstyle1}>                
                        what you see             
                    </Text>
                    <Text style = {styles.textstyle2}>               
                        swipe top
                    </Text>
                    <Text style = {styles.bootomarrowleftright}>               
                        &#xf3d8;
                    </Text>
                </View>
            </View>
            
            
          </View>
          </GestureRecognizer>
       )
    }
}
const onButtonPress = () => {
  Alert.alert('Successfully Login');
};
const styles = StyleSheet.create ({
   container: {
    flex: 1,
      
      
      backgroundColor: '#75739d',
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
        fontFamily: 'Quicksand_Light'
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
        height:22,
        width:25,
        marginTop:15,
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
         
        flexDirection: 'row',
        
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginTop:50
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