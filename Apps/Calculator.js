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


export default class Calculator extends Component {
  constructor(props) {
        super(props)
        this.state = {
            segmentSelectedIndex: 0,
            billAmount: 0,
            result: 0,
            tipAmount:0,
        }
    }

    handleSegmentChange(index){
        this.setState({
            segmentSelectedIndex: index
        })
        this.handleBillAmount(this.state.billAmount,index);
    }

    handleBillAmount(bill,index){
        this.setState({
            billAmount : bill
        })
        if(!index && index != 0){
            index = this.state.segmentSelectedIndex;
        }
        bill = parseFloat(bill) ;
        var percent = this.getSegementValues()[index]; // get percent
        percent = parseFloat(percent)/100; // convert to 0.1, 0.15, 0.5
        var billAmountTemp = bill*percent ;
        this.setState({
            tipAmount: billAmountTemp,
            result: bill + billAmountTemp+""
        })
    }
    getSegementValues(){
        return ['10%', '15%', '50%'];
    }


  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.texttitle}>Tip Calculator</Text>
      <View style = {{flexDirection:'row',alignItems: 'center',marginBottom: 8}}>
        <Text style = {{flex:1}}>Bill amount</Text>
        <TextInput
           style={styles.textBillInput}
           onChangeText={(billAmount) => this.handleBillAmount(billAmount)}
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
                   values={this.getSegementValues()}
                   onTabPress= {index => this.handleSegmentChange(index)}
                   />


      <View style = {{flexDirection:'column',marginTop: 30}}>
        <Text style={styles.resulttext}>
            Bill amount : {this.state.billAmount}
        </Text>
        <Text style={styles.resulttext}>
            Tip amount : {this.state.tipAmount}
        </Text>
        <Text style={styles.resulttext}>
            Percent : {this.getSegementValues()[this.state.segmentSelectedIndex]}
        </Text>

        <Text style={styles.finalresult}>
            Result : {this.state.result}
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
    paddingRight:16,
    paddingTop:20,
  },
  texttitle:{
    color:'black',
    fontSize:30,
    marginTop:50,
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
