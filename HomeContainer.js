import React, { Component } from 'react'
import {
   View,
   StyleSheet,
   Dimensions
} from 'react-native'
import HomeButton from './HomeButton'

export default class HomeContainer extends Component {
   constructor() {
      super()
   }
   render() {
      return (
         <View style = {styles.container}>
            <HomeButton/>
         </View>
      )
   }
   openMenu = () =>{
      alert("Menu button pressed!")
   }
   goToAbout = () => {
      this.props.navigator.push({
         name: 'About',
         title: 'About',
         openMenu: this.openMenu
      });
   }
}

const styles = StyleSheet.create ({
   container: {
      
      backgroundColor: '#729299',
      height: Dimensions.get("window").height
   }
   
})