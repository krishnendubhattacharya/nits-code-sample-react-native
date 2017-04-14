'use strict';

import React from 'react';
import {StyleSheet, Text, View, Image, Button,
    Alert,
    TouchableHighlight,
    Dimensions} from 'react-native';


import SwipeCards from 'react-native-swipe-cards';


let Card = React.createClass({
  render() {
    return (
      <View style={styles.card}>
        
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        
      </View>
    )
  }
})

let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
})

const Cards = [
  {name: '1', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/1.png'},
  {name: '2', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/2.png'},
  {name: '3', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/3.png'},
  {name: '4', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/4.png'},
  {name: '5', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/1.png'},
  {name: '6', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/2.png'},
  {name: '7', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/3.png'},
  {name: '8', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/4.png'},
  {name: '9', image: 'http://104.131.83.218/makeoffer/upload/categoryimage/bs-news_new.png'},
]

/*const Cards2 = [
  {name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif'},
  {name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif'},
  {name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif'},
  {name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif'},
]*/

export default React.createClass({
  getInitialState() {
    return {
      cards: Cards,
      outOfCards: false
    }
  },
  handleYup (card) {
    console.log("yup")
  },
  handleNope (card) {
    console.log("nope")
  },
  handleMaybe (card) {
    console.log("maybe")
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      /*if (!this.state.outOfCards) {
        console.log(`Adding ${Cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(Cards2),
          outOfCards: true
        })
      }*/

    }

  },
  render() {
    return (     
      
      <View style={{flex:1}}>
        <View style = {styles.hesdercontainer}>
            <View style={styles.firstrow}>
                <Image
                 style={styles.imgcss}
                 source={require('./Images/logo-1.png')}
               />
                <Text style={styles.textcss}>shop</Text>
            </View>
            <View style={styles.secondrow}>
                <Image
                 style={styles.imgcss}
                 source={require('./Images/logo.png')}
               />
                <Text style={styles.textcss}>trending</Text>
            </View>
            <View style={styles.thirdrow}>
                <Image
                 style={styles.imgcss}
                 source={require('./Images/logo.png')}
               />
                <Text style={styles.textcss}>kowallo</Text>
            </View>
            <View style={styles.fourthrow}>
                <Image
                 style={styles.imgcss}
                 source={require('./Images/logo-4.png')}
               />
                <Text style={styles.textcss}>friends</Text>
            </View>
            <View style={styles.fifthrow}>
                <Image
                 style={styles.imgcss}
                 source={require('./Images/settings_icons.png')}
               />
                <Text style={styles.textcss}>settings</Text>
            </View>
        </View>

        <SwipeCards

        cards={this.state.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}
        showMaybe={true}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        cardRemoved={this.cardRemoved}

        
      />
      </View>
      
      
     
    )
  }
})

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',    
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
   
    width: Dimensions.get("window").width,
    height: (Dimensions.get("window").height - (((Dimensions.get("window").width)/5)*2))
  },
  text: {
    fontSize: 20,
    
  },
  noMoreCards: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    textcss:{
        justifyContent: 'center',
        color:'#ffffff'
    }
})