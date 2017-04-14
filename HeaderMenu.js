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


export default HeaderMenu = (props) => {
    
    
       return (

        <View style = {styles.hesdercontainer}>
            <View style={styles.firstrow}>
                <Image
                 style={styles.imgcss}
                 source={require('./Images/logo.png')}
               />
                <Text style={styles.textcss}>newest</Text>
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
                 source={require('./Images/logo.png')}
               />
                <Text style={styles.textcss}>relevant</Text>
            </View>
            <View style={styles.fifthrow}>
                <Image
                 style={styles.imgcss}
                 source={require('./Images/logo.png')}
               />
                <Text style={styles.textcss}>friends</Text>
            </View>
        </View>
          
       )
    
}
const onButtonPress = () => {
  Alert.alert('Successfully Login');
};
const styles = StyleSheet.create ({
   hesdercontainer: {
    flex: 1, 
    flexDirection: 'row'    
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
        width:35
    },
    textcss:{
        justifyContent: 'center',
        color:'#ffffff'
    }
    
})