import React, { Component } from 'react'

import {
   StyleSheet,
   Text,
   Navigator,
   TouchableOpacity
} from 'react-native'

import AboutContainer from './AboutContainer'
import HomeContainer from './HomeContainer'
import Dashboard from './Dashboard'
import Swipe from './Swipe'
import SplashPage from './SplashPage'
import SwipeUp from './SwipeUp'
import Listing from './Listing'
import SwipeUpDown from './SwipeUpDown'
import ProductListing from './ProductListing'
import SwipeAll from './SwipeAll'
import SwipeFirst from './SwipeFirst'
import SwipeSecond from './SwipeSecond'
import SwipeThird from './SwipeThird'
import SwipeFourth from './SwipeFourth'
import SwipeFifth from './SwipeFifth'
import Login from './Login'
import Passcode from './Passcode'
import SwipeAllDirec from './SwipeAllDirec'
import SwipeAllRest from './SwipeAllRest'
import SwipeUpDownFriend from './SwipeUpDownFriend'
import SwipeUpDownKowallo from './SwipeUpDownKowallo'
import SwipeUpDownSetting from './SwipeUpDownSetting'
import SwipeUpDownTrending from './SwipeUpDownTrending'



export default class Router extends Component {
   constructor(){
      super()
   }
   render() {
      return (
         <Navigator
            initialRoute = {{ name: 'SplashPage', title: 'SplashPage' }}
            renderScene = { this.renderScene }
            
         />
      );
   }
   renderScene(route, navigator) {
      if(route.name == 'Home') {
         return (
            <HomeContainer
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'About') {
         return (
            <AboutContainer
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'Dashboard') {
         return (
            <Dashboard
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
    if(route.name == 'Swipe') {
         return (
            <Swipe
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'SplashPage') {
         return (
            <SplashPage
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
        if(route.name == 'SwipeUp') {
         return (
            <SwipeUp
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      
      if(route.name == 'Listing') {
         return (
            <Listing
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'SwipeUpDown') {
         return (
            <SwipeUpDown
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'ProductListing') {
         return (
            <ProductListing
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'SwipeAll') {
         return (
            <SwipeAll
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'SwipeFirst') {
         return (
            <SwipeFirst
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'SwipeSecond') {
         return (
            <SwipeSecond
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'SwipeThird') {
         return (
            <SwipeThird
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'SwipeFourth') {
         return (
            <SwipeFourth
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'SwipeFifth') {
         return (
            <SwipeFifth
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'Login') {
         return (
            <Login
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'Passcode') {
         return (
            <Passcode
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'SwipeAllDirec') {
         return (
            <SwipeAllDirec
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'SwipeAllRest') {
         return (
            <SwipeAllRest
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'SwipeUpDownFriend') {
         return (
            <SwipeUpDownFriend
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'SwipeUpDownKowallo') {
         return (
            <SwipeUpDownKowallo
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'SwipeUpDownSetting') {
         return (
            <SwipeUpDownSetting
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
      if(route.name == 'SwipeUpDownTrending') {
         return (
            <SwipeUpDownTrending
               navigator = {navigator}
               {...route.passProps} 
            />
         )
      }
   }
}

var NavigationBarRouteMapper = {
   LeftButton(route, navigator, index, navState) {
      if(index > 0) {
         return (
            <TouchableOpacity
               onPress = {() => { if (index > 0) { navigator.pop() } }}>
               <Text style={ styles.leftButton }>
                  Back
               </Text>
            </TouchableOpacity>
         )
      }
      else { return null }
   },
   RightButton(route, navigator, index, navState) {
      if (route.openMenu) return (
         <TouchableOpacity
            onPress = { () => route.openMenu() }>
            <Text style = { styles.rightButton }>
               { route.rightText || 'Menu' }
            </Text>
         </TouchableOpacity>
      )
   },
   Title(route, navigator, index, navState) {
      return (
         <Text style = { styles.title }>
            {route.title}
         </Text>
      )
   }
};

const styles = StyleSheet.create({
   navigationBar: {
      backgroundColor: 'blue',
   },
   leftButton: {
      color: '#ffffff',
      margin: 10,
      fontSize: 17,
   },
   title: {
      paddingVertical: 10,
      color: '#ffffff',
      justifyContent: 'center',
      fontSize: 18
   },
   rightButton: {
      color: 'white',
      margin: 10,
      fontSize: 16
   }
})