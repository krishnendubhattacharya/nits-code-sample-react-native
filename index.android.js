/**
 * Sample React Native App
 * https://github.com/facebook/react-native   AwesomeProjectTest
 * @flow
 */

import React, { Component } from 'react'
import {
   AppRegistry,
   View
} from 'react-native'
import Router from './Router'

class AwesomeProjectTest extends Component {
   render() {
      return (
         <Router />
      )
   }
}

AppRegistry.registerComponent('AwesomeProjectTest', () => AwesomeProjectTest)
