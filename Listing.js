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
import HeaderMenu from './HeaderMenu'

export default class Listing extends Component {
    constructor() {
      super()
   }
    render() {
      return (
         <View>
            <HeaderMenu />
            <View style = {styles.container}>
                <Text style = {styles.listingfirsttext}>SET STYLE</Text>
                <Text style = {styles.listingsecondtext}>SAVED ITEMS</Text>
                <Text style = {styles.listingthirdtext}>INVITE FRIENDS</Text>
                <Text style = {styles.listingfourthtext}>NOTIFICATIONS</Text>
                <Text style = {styles.listingfifthtext}>SETTINGS</Text>
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
    //flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (Dimensions.get("window").width/5)
   },
container: {
    //flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (Dimensions.get("window").width/5)
   },
listingfirsttext: {
    //flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:30,
    marginTop:45,
    color:'#5D7881'
   },
listingsecondtext: {
    //flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:30,
    marginTop:45,
    color:'#9E7B77'
   },
    listingthirdtext: {
    //flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:30,
    marginTop:45,
    color:'#86A192'
   },
listingfourthtext: {
    //flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:30,
    marginTop:45,
    color:'#5F6F88'
   },
listingfifthtext: {
    //flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:30,
    marginTop:45,
    color:'#95876C'
   }
    
    
})
