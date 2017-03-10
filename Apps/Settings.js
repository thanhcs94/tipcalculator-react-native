
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
  View,
  TextInput,
  Navigator,
  TouchableOpacity,
  Picker,
  AsyncStorage,
} from 'react-native';


export default class Settings extends Component {
  constructor(props){
    super(props);
    this.state = {screnTransition: ''};
    this.getSceneTransition();
  }

  // set data to AsyncStorage
  async setSceneTransition(screne){
    try{
      await AsyncStorage.setItem('SCENE_SELECTED', screne);
      this.setState({
        screnTransition : screne
      })
    }catch(error){
    }
  }

  // get data to AsyncStorage
  async getSceneTransition(){
    try{
      let screnTransitionValue = await AsyncStorage.getItem("SCENE_SELECTED");
      this.setState({
        screnTransition : screnTransitionValue
      });
    }catch(error){
      console.log("Hmm, something when wrong.." + error);
    }
  }

  // this method will be called when scence loaded
  componentDidMount(){
    this.getSceneTransition();
  }

  // action to set select value to AsyncStorage
  setSelectSceneTransition(scene){
    try {
      this.setSceneTransition(scene);
      this.setState({
        scene: scene
      });
    } catch (error) {
      console.log("Oop!! Something went wrong !!!" + error);
    }
  }

  // Render
  render(){
    return(
      <View style={{marginTop:50,padding:10}}>
        <View>
          <Text style={{fontSize:25}}>Scene Transitions</Text>
          <Picker
           selectedValue={this.state.screnTransition}
            onValueChange={(scene) => this.setSelectSceneTransition(scene)}>
            <Picker.Item label="FloatFromRight" value="FloatFromRight" />
            <Picker.Item label="FloatFromLeft" value="FloatFromLeft" />
            <Picker.Item label="FloatFromBottom" value="FloatFromBottom" />
            <Picker.Item label="FloatFromBottomAndroid" value="FloatFromBottomAndroid" />
            <Picker.Item label="SwipeFromLeft" value="SwipeFromLeft" />
            <Picker.Item label="HorizontalSwipeJump" value="HorizontalSwipeJump" />
            <Picker.Item label="HorizontalSwipeJumpFromRight" value="HorizontalSwipeJumpFromRight" />
          </Picker>
        </View>
      </View>
    )
  }
}
