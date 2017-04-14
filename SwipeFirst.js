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
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class SwipeFirst extends Component {
    constructor() {
      super()
   }


onSwipeUp(gestureState) {
        
    //Alert.alert('swiped up');
    
  }
 
  onSwipeDown(gestureState) {
    
    //Alert.alert('swiped down');
  }
 
  onSwipeLeft(gestureState) {
    
    //Alert.alert('swiped left');
    this.props.navigator.replace({
        name: 'SwipeSecond'
    });

  }
 
  onSwipeRight(gestureState) {
    
    //Alert.alert('swiped right');
    this.props.navigator.replace({
        name: 'SwipeSecond'
    });
  }

onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {          
          case SWIPE_LEFT:
            this.setState({backgroundColor: 'blue'});

            break;
          case SWIPE_RIGHT:
            this.setState({backgroundColor: 'yellow'});
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
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
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
                     source={require('./Images/t-d.png')}
                   />
                    <Text style = {styles.textstyle}>
                        If you dislike                
                    </Text>
                    <Text style = {styles.textstyle1}>                
                        what you see             
                    </Text>
                    <Text style = {styles.textstyle2}>               
                        swipe left
                    </Text>
                    <Text style = {styles.bootomarrowleftright}>               
                        &#xf3d2;
                    </Text>

                    
                </View>
                <View style = {styles.swipecontentright}>
                    <Image
                     style={styles.upimage}
                     source={require('./Images/tu.png')}
                   />
                    <Text style = {styles.textstyle}>
                        If you like                
                    </Text>
                    <Text style = {styles.textstyle1}>                
                        what you see             
                    </Text>
                    <Text style = {styles.textstyle2}>               
                        swipe right
                    </Text>
                    <Text style = {styles.bootomarrowleftright}>               
                        &#xf3d3;
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
      
      
      backgroundColor: '#729888',
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
        height:20,
        width:20,
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