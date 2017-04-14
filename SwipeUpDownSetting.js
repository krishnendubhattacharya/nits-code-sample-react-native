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
    ToastAndroid
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import * as Animatable from 'react-native-animatable';
var MOOD_LIST =  ["sunny", "cloudy", "thunderstorm", "warm", "suncloudy"];

var MOODS = [
  {name: '1', image: 'http://107.170.152.166/team2/kowallo/images/6.jpg'},
  {name: '2', image: 'http://107.170.152.166/team2/kowallo/images/7.jpg'},
  {name: '3', image: 'http://107.170.152.166/team2/kowallo/images/1.jpg'},
  {name: '4', image: 'http://107.170.152.166/team2/kowallo/images/2.jpg'},
  {name: '5', image: 'http://107.170.152.166/team2/kowallo/images/3.jpg'},
  {name: '6', image: 'http://107.170.152.166/team2/kowallo/images/4.jpg'},
  {name: '7', image: 'http://107.170.152.166/team2/kowallo/images/5.jpg'},  
  {name: '8', image: 'http://107.170.152.166/team2/kowallo/images/8.jpg'},
  {name: '9', image: 'http://107.170.152.166/team2/kowallo/images/9.jpg'},
];
var i = 0;


export default class SwipeUpDownSetting extends Component {
    constructor(props) {
    super(props);

    this.state = {
      mood: "sunny",
    };


    
    
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff'
    };
    const Cards = [
  {name: '1', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/1.png'},
  {name: '2', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/2.png'},
  {name: '3', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/3.png'},
  {name: '4', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/4.png'},
  {name: '5', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/1.png'},
  {name: '6', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/2.png'},
  {name: '7', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/3.png'},
  {name: '8', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/4.png'},
  {name: '9', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/10.png'},
];
  }

  onShopButtonClk(event){
        //let pass_cod=this.state.passcod;
        //Alert.alert('1');
        i = 0
        this.props.navigator.replace({
            name: 'SwipeUpDown'
        });
        
   };
   onTrendingButtonClk(event){
        //let pass_cod=this.state.passcod;
        //Alert.alert('2');
        i = 0
        this.props.navigator.replace({
            name: 'SwipeUpDownTrending'
        });
        
   };
   onKowalloButtonClk(event){
        //let pass_cod=this.state.passcod;
        //Alert.alert('3');
        i = 0
        this.props.navigator.replace({
            name: 'SwipeUpDownKowallo'
        });
        
   };
   onFriendsButtonClk(event){
        //let pass_cod=this.state.passcod;
        //Alert.alert('4');
        i = 0
        this.props.navigator.replace({
            name: 'SwipeUpDownFriend'
        });
        
   };
   onSettingButtonClk(event){
        //let pass_cod=this.state.passcod;
        //Alert.alert('5');
        i = 0;
        this.props.navigator.replace({
            name: 'SwipeUpDownSetting'
        });
        
   };

  





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

    onMoodClick() {    
    i++;
    var mood = MOOD_LIST[i];
    this.setState ({mood: mood});
  }

  getMoodImage() {
    //alert(i);
    //console.log(moodName)
    if(i <= 8){
      ToastAndroid.showWithGravity('Loading..', ToastAndroid.SHORT, ToastAndroid.CENTER);
    return MOODS[i].image;
    }
  }

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
    //this.swipeApiCall('up',2);this.state.passcod
    i++;
    if(i >= 8){
      Alert.alert('No more products');
    }
    

    
  }
 
  onSwipeDown(gestureState) {
    this.setState({myText: 'You swiped down!'});
    //this.swipeApiCall('down',1);
    //Alert.alert('swiped down');
    i++;
    if(i >= 8){
      Alert.alert('No more products');
    }
  }
 
  onSwipeLeft(gestureState) {
    this.setState({myText: 'You swiped left!'});
    //this.swipeApiCall('left',0);
    //Alert.alert('swiped left');
    i++;
    if(i >= 8){
      Alert.alert('No more products');
    }

  }
 
  onSwipeRight(gestureState) {
    this.setState({myText: 'You swiped right!'});
    //this.swipeApiCall('right',3);
    //Alert.alert('swiped right');
    i++;
    if(i >= 8){
      Alert.alert('No more products');
    }
  }

    onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
          case SWIPE_UP:
            //this.setState({backgroundColor: 'red'});
            this.setState({myText: 'You swiped up!'});
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
        <View style={{flex:1}}>
        <View style = {styles.hesdercontainer}>
        <TouchableHighlight onPress={this.onShopButtonClk.bind(this)}>
            <View style={styles.firstrow}>
              
                  <Image
                   style={styles.imgcss}
                   source={require('./Images/logo-1.png')}
                 />
              
                <Text style={styles.textcss}>shop</Text>
            </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.onTrendingButtonClk.bind(this)}>
            <View style={styles.secondrow}>
                <Image
                 style={styles.imgcss}
                 source={require('./Images/ARROW.png')}
               />
                <Text style={styles.textcss}>trending</Text>
            </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.onKowalloButtonClk.bind(this)}>
            <View style={styles.thirdrow}>
                <Image
                 style={styles.imgcss}
                 source={require('./Images/logo.png')}
               />
                <Text style={styles.textcss}>kowallo</Text>
            </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.onFriendsButtonClk.bind(this)}>
            <View style={styles.fourthrow}>
                <Image
                 style={styles.imgcss}
                 source={require('./Images/logo-4.png')}
               />
                <Text style={styles.textcss}>friends</Text>
            </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.onSettingButtonClk.bind(this)}>
            <View style={styles.fifthrow}>
                <Image
                 style={styles.imgcsssettings}
                 source={require('./Images/settings_icons.png')}
               />
                <Text style={styles.textcss}>settings</Text>
            </View>
            </TouchableHighlight>
        </View>

          <View style = {styles.swipecontainer}>
                
                <View style = {styles.swipeimgview}>
                    <Image
                     style={styles.swipeimgcss}
                     source={{uri: this.getMoodImage()}}                     
                   />
                </View>                
                
            </View>

            <View style = {styles.footercontainer}>
            <View style={styles.footerfirstrow}>
                <Image
                 style={styles.footerimgcss}
                 source={require('./Images/d-arrow.png')}
               />
                <Text style={styles.footertextcss}>HATE</Text>
            </View>
            <View style={styles.footersecondrow}>
                <Image
                 style={styles.footerimgcss}
                 source={require('./Images/l-arrow.png')}
               />
                <Text style={styles.footertextcss}>DISLIKE</Text>
            </View>
            <View style={styles.footerthirdrow}>
                <Text style={styles.footertextcss}>42</Text>
                <Text style={styles.footertextcss}>COINS</Text>
            </View>
            <View style={styles.footerfourthrow}>
                <Image
                 style={styles.footerimgcss}
                 source={require('./Images/r-arrow.png')}
               />
                <Text style={styles.footertextcss}>LIKE</Text>
            </View>
            <View style={styles.footerfifthrow}>
                <Image
                 style={styles.footerimgcss}
                 source={require('./Images/u-arrow.png')}
               />
                <Text style={styles.footertextcss}>LOVE</Text>
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
   hesdercontainer: {
    
    flexDirection: 'row',
      
   },
    firstrow: {        
        width:(Dimensions.get("window").width/5),
        height: (Dimensions.get("window").width/5),
        backgroundColor: '#8CA89A',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
   },
    secondrow: {        
        width:(Dimensions.get("window").width/5),
        height: (Dimensions.get("window").width/5),
        backgroundColor: '#A98A88',
        justifyContent: 'center',
        alignItems: 'center'
   },
    thirdrow: {        
        width:(Dimensions.get("window").width/5),
        height: (Dimensions.get("window").width/5),
        backgroundColor: '#8EA5AB',
       justifyContent: 'center',
        alignItems: 'center'
   },
    fourthrow: {        
        width:(Dimensions.get("window").width/5),
        height: (Dimensions.get("window").width/5),
        backgroundColor: '#8B93A8',
        justifyContent: 'center',
        alignItems: 'center'
   },
    fifthrow: {        
        width:(Dimensions.get("window").width/5),
        height: (Dimensions.get("window").width/5),
        backgroundColor: '#A9A38B',
        justifyContent: 'center',
        alignItems: 'center'
   },
    imgcss:{
        justifyContent: 'center',
        height:28,
        width:35,
        alignItems: 'center'
    },
    imgcsssettings:{
        justifyContent: 'center',
        height:28,
        width:28,
        alignItems: 'center'
    },
    textcss:{
        justifyContent: 'center',
        color:'#ffffff'
    },
    swipecontainer: {
    //flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    height: (Dimensions.get("window").height - (Dimensions.get("window").width/5)*2.35)
    
   },
   swipeimgcss:{        
        height: (Dimensions.get("window").height - (Dimensions.get("window").width/5)*2.35),
        width:Dimensions.get("window").width
    },

    footercontainer: {
    
    flexDirection: 'row',
      
   },
    footerfirstrow: {        
        width:(Dimensions.get("window").width/5),
        height: (Dimensions.get("window").width/5),
        backgroundColor: '#585756',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
   },
    footersecondrow: {        
        width:(Dimensions.get("window").width/5),
        height: (Dimensions.get("window").width/5),
        backgroundColor: '#585756',
        justifyContent: 'center',
        alignItems: 'center'
   },
    footerthirdrow: {        
        width:(Dimensions.get("window").width/5),
        height: (Dimensions.get("window").width/5),
        backgroundColor: '#73939A',
       justifyContent: 'center',
        alignItems: 'center'
   },
    footerfourthrow: {        
        width:(Dimensions.get("window").width/5),
        height: (Dimensions.get("window").width/5),
        backgroundColor: '#585756',
        justifyContent: 'center',
        alignItems: 'center'
   },
    footerfifthrow: {        
        width:(Dimensions.get("window").width/5),
        height: (Dimensions.get("window").width/5),
        backgroundColor: '#585756',
        justifyContent: 'center',
        alignItems: 'center'
   },
    footerimgcss:{
        justifyContent: 'center',
        height:23,
        width:23,
        alignItems: 'center'
    },
    footertextcss:{
        justifyContent: 'center',
        color:'#ffffff'
    },
    
})