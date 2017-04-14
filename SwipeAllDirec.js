import React from 'react';
import {StyleSheet, Text, View, Image, Button,
    Alert,
    TouchableHighlight,
    Dimensions} from 'react-native';
import Swiper from 'react-native-swiper'



var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

class TitleText extends React.Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: 'white' }}>
        {this.props.label}
      </Text>
    )
  }
}

class Home extends React.Component {

  viewStyle() {
    return {
      flex: 1,
      backgroundColor: '#000000 ',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

  render() {
    return (
      <Swiper
        loop={false}
        showsPagination={false}
        index={1}>
        <View style={this.viewStyle()}>
          <TitleText label="Left" />
        </View>
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={1}>
          <View style={this.viewStyle()}>
            <TitleText label="Top" />
          </View>
          <View style={this.viewStyle()}>
            <TitleText label="Home" />
          </View>
          <View style={this.viewStyle()}>
            <TitleText label="Bottom" />
          </View>
        </Swiper>        
        <View style={this.viewStyle()}>
          <TitleText label="Right" />
        </View>
      </Swiper>
      
    )
  }
}

export default Home