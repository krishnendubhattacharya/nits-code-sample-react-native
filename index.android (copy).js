/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Alert,
  View
} from 'react-native';

export default class AwesomeProjectTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Signin
        </Text>
        <Text style={styles.instructions}>
          Hello World
        </Text>
        <TextInput
          style={{height: 40,width:300}}
          placeholder="Enter your Email"
          
        />
        <TextInput
          secureTextEntry={true}
          style={{height: 40,width:300}}
          placeholder="Enter your password"
          
        />
        <Button
          onPress={onButtonPress}
          title="Go"
          accessibilityLabel="See an informative alert"
        />
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const onButtonPress = () => {
  Alert.alert('Successfully Login');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProjectTest', () => AwesomeProjectTest);
