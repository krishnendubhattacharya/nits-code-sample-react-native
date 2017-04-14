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
    ListView
} from 'react-native'
import HeaderMenu from './HeaderMenu'
var imagewidth = (((Dimensions.get("window").width)*23)/100);
var textwidth = (((Dimensions.get("window").width)*65)/100);
var arrowwidth = (((Dimensions.get("window").width)*12)/100);

export default class ProductListing extends Component {
    constructor() {
      super();
      //apicall;
      this.state = {
         dataa: [{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"2","name":"Allergist ","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"3","name":"Cardiologist.","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"4","name":"Dermatologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"5","name":"Gynecologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"6","name":"Nephrologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"}]
      }
      //this.apicall();
      
      this.statee = [];


      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(this.state.dataa)
        };
   }
   apicall() {    
    
    /*this.setState({
        dataa: [{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"2","name":"Allergist ","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"3","name":"Cardiologist.","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"4","name":"Dermatologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"5","name":"Gynecologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"6","name":"Nephrologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"}]
     })*/
    //Alert.alert('1');
    /*fetch('http://104.131.83.218/makeoffer/webservice/categoriesList', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson.all_categories);
         this.setState({
            dataa: [{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"2","name":"Allergist ","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"3","name":"Cardiologist.","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"4","name":"Dermatologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"5","name":"Gynecologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"6","name":"Nephrologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"}]
         })
         console.log(this.state.dataa);
         statee = responseJson.all_categories;
         
      })
      .catch((error) => {
         console.error(error);
      });*/

      statee = [{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"2","name":"Allergist ","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"3","name":"Cardiologist.","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"4","name":"Dermatologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"5","name":"Gynecologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"6","name":"Nephrologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"}];
    
  }
 
    render() {
      return (
         <View>
            <HeaderMenu />
            <View style = {styles.container}>
                <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <View style = {styles.innerlistcontainer}>
                <View style = {styles.imgview}>
                    <Image
                     style={styles.imgcss}
                     source={require('./Images/product1.png')}
                   />
                </View>
                <View style = {styles.textarrowview}>
                    <Text>CURRENT BID: ghhh</Text>
                    <Text>TIME REMAINING: FGJ FHF</Text>
                    <Text>WEBSITE.COM</Text>
                </View>
                <View style = {styles.arrowview}>
                    <Text>fgh</Text>
                </View>
               </View>}
        />
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 5,
    marginTop: (Dimensions.get("window").width/5)
   },
   innerlistcontainer:{
    flexDirection: 'row',
    marginTop:5
   },
   imgview:{
    width: imagewidth
   },
   textarrowview:{
    marginLeft:5,
    width: textwidth,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
   },
   arrowview:{
    width: arrowwidth,
    justifyContent: 'center',
    alignItems: 'flex-start'
   },
    imgcss:{        
        height:imagewidth,
        width:imagewidth
    }

    
    
})
