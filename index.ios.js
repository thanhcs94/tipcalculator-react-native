/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Navigator,
  TouchableOpacity,
} from 'react-native';


export default class MainScreen extends Component {

  renderScene(route,navigator){
    switch (route.name) {
      case "page1":  return (<TipCalculator clickSettings={()=>{
        navigator.push({name:"page2"});
      }}
      />);
        break;
      case "page2":  return (<BlankScence clickBack={()=>{
          navigator.pop({name:"page1"});
        }}
        />);
          break;
      default:
    }
  }
  render() {
    return (
      <Navigator
        initialRoute = {{name:"page1"}}
        renderScene  = {this.renderScene}
      />
    )
  }
}


class BlankScence extends Component {
  constructor(props){
    super(props);
  }
 render() {
   return (
     <View style={styles.container}>
      <View style={{flexDirection:'column', marginTop:30}}>
        <TouchableOpacity onPress= {this.props.clickBack}>
              <Text style={{textAlign:'center', color:'#4285f4'}}>Back</Text>
         </TouchableOpacity>
        <Text style ={{marginTop:20}}>Fck ya !!! I am a blank page, I have nothing !</Text>

      </View>
     </View>
   );
 }
}

class TipCalculator extends Component {
  constructor(props){
    super(props);
    this.state ={
      billAmount:"0",
      tipAmount :"0",
      percent : "0.1",
      finalResult : "0"
    };
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress= {this.props.clickSettings}>
      <Text style={styles.textsetting}>Settings</Text>
      </TouchableOpacity>
      <Text style={styles.texttitle}>Tip Calculator</Text>

      <View style = {{flexDirection:'row',alignItems: 'center',marginBottom: 8}}>
        <Text style = {{flex:1}}>Bill amount</Text>
        <TextInput
           style={styles.textBillInput}
           onChangeText={(billAmount) => this.setState({billAmount})}
           value={this.state.billAmount}
           keyboardType='numeric'
           maxLength={10}
        />
      </View>

      <View style = {{flexDirection:'row',alignItems: 'center',marginBottom: 50}}>
        <Text style = {{flex:1}}>Tip amount</Text>
        <Text style = {{textAlign:'left', flex:3}}>
          {this.state.tipAmount}
        </Text>
      </View>

      <SegmentedControlTab style= {{marginTop:100}}
                   values={['10%', '15%', '50%']}
                   onTabPress= {index => console.log(index)}
                   />


      <View style = {{flexDirection:'column',marginTop: 30}}>
        <Text style={styles.resulttext}>
            Bill amount : {this.state.billAmount}
        </Text>
        <Text style={styles.resulttext}>
            Tip amount : {this.state.tipAmount}
        </Text>
        <Text style={styles.resulttext}>
            Percent : {this.state.percent}
        </Text>

        <Text style={styles.finalresult}>
            Result : {this.state.finalResult}
        </Text>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingLeft: 16,
    paddingRight:16
  },
  texttitle:{
    color:'black',
    fontSize:30,
    marginTop:16,
    marginBottom: 30,
    textAlign:'center',
    fontWeight:'bold',
  },
  textsetting:{
    color:'#4285f4',
    fontSize:16,
    marginTop:30,
    textAlign:'center',
  },
  resulttext: {
    textAlign:'left',
    color: '#333333',
    marginBottom: 5,
  },
  finalresult: {
    textAlign:'left',
    color: 'black',
    marginTop:30,
    fontWeight:'bold',
    fontSize: 16,
  },
  textBillInput:{
    flex:3,
    height: 30,
    borderColor: '#cccccc',
    borderWidth: 1,
    color:'black',
    padding:4
  }
});

AppRegistry.registerComponent('TipCalculator', () => MainScreen);
