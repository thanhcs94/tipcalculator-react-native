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
  AsyncStorage
} from 'react-native';
import Calculator from './Calculator.js'
import Settings from './Settings.js';

var NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) =>{
    return
  },
  RightButton: (route, navigator, index, navState) => {
    if(route.id != 'Calculator'){
      return (
        <TouchableOpacity onPress={() => navigator.pop()}>
          <Text style={styles.btnControl}>Save</Text>
        </TouchableOpacity>
      );
    }else{
      return (
        <TouchableOpacity onPress={() => navigator.push({id: 'Settings'})}>
          <Text style={styles.btnControl}>Settings</Text>
        </TouchableOpacity>
      );
    }
  },
  Title: (route, navigator, index, navState) => {
    return;
  },
}
export default class Powerrange extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sceneTransition: 'FloatFromRight',
        }
    }
  render() {
    return (
        <Navigator
          initialRoute={{id: 'Calculator'}}
          renderScene={this.renderScene.bind(this)}
          navigationBar={
              <Navigator.NavigationBar
                    style = { {padding: 8,flex:1,marginBottom:8} }
                    routeMapper={NavigationBarRouteMapper} />}
          configureScene={this.configureScene.bind(this)}
        />
    );
  }

  // To navigate to page based on page ID
  renderScene(route, navigator) {
    switch (route.id) {
            case 'Calculator':
              return <Calculator/>
              break;
          case 'Settings':
              return <Settings/>
              break;
          default:
    }
  }

  // config scene transition, change scene transition based on Setting
  configureScene(route, routeStack){
    //@Todo, change to scene transition from Asynstorage vale
    this.getSceneTransition() ;
    var temp = this.state.sceneTransition ;
    return Navigator.SceneConfigs[temp];
  }

  async getSceneTransition(){
    try{
      let sceneTransitionValue = await AsyncStorage.getItem("SCENE_SELECTED");
      // Store value to State
      this.setState({
        sceneTransition : sceneTransitionValue
      });
    }catch(error){
      console.log("Hmm, something when wrong when get data..." + error);
    }
  }
}


const styles = StyleSheet.create({

   btnControl: {
      color: '#000',
      marginTop: 10,
      marginRight: 10,
      fontSize: 16
   }
})
