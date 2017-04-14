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
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import * as Animatable from 'react-native-animatable';


export default class SwipeUpDown extends Component {
    constructor(props) {
    super(props);
    
    
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff'
    };
  }

    /*swipeApiCall(swipe_direction,swipe_value){
        fetch('http://107.170.152.166/team2/kowallo/swipe_points.php?swipe_direction='+swipe_direction+'&swipe_point='+swipe_value, {
            method: 'GET'
         })
         .then((response) => response.json())
         .then((responseJson) => {
            //console.log(responseJson.ACK);
            Alert.alert(responseJson.MSG);
            //console.log(1);

         })
         .catch((error) => {
            console.error(error);
         });
    }*/
    //?swipe_direction='+swipe_direction+'&swipe_point='+swipe_value
    swipeApiCall(swipe_direction,swipe_value){
        fetch('http://107.170.152.166/team2/kowallo/swipe_points.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            swipe_direction: swipe_direction,
            swipe_point: swipe_value
          })
         })
         .then((response) => response.json())
         .then((responseJson) => {
            console.log(responseJson);
            Alert.alert(responseJson.MSG);
            //console.log(1);

         })
         .catch((error) => {
            console.error(error);
         });
}

  onSwipeUp(gestureState) {
    this.setState({myText: 'You swiped up!'});
    this.swipeApiCall('up',2);
    
    //Alert.alert('swiped up');
    
  }
 
  onSwipeDown(gestureState) {
    this.setState({myText: 'You swiped down!'});
    this.swipeApiCall('down',1);
    //Alert.alert('swiped down');
  }
 
  onSwipeLeft(gestureState) {
    this.setState({myText: 'You swiped left!'});
    this.swipeApiCall('left',0);
    //Alert.alert('swiped left');

  }
 
  onSwipeRight(gestureState) {
    this.setState({myText: 'You swiped right!'});
    this.swipeApiCall('right',3);
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
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
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

                    
                    
                    <Animatable.Text animation="slideInRight" style = {styles.uparrow} iterationCount={5} direction="alternate">&#xf3d2;&#xf3d2;&#xf3d2;</Animatable.Text>
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